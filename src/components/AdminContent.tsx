import React, { useEffect, useState } from "react";
import {
  Layout,
  Button,
  Card,
  Row,
  Col,
  Modal,
  Form,
  Input,
  Select,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  User,
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../api/userApi";

import "./AdminContent.css";

interface AdminContentProps {
  isBlurred: boolean;
}

const AdminContent: React.FC<AdminContentProps> = ({ isBlurred }) => {
  const [users, setUsers] = useState<User[] | undefined>(undefined);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [form] = Form.useForm();

  useEffect(() => {
    setLoading(true);
    fetchUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const showModal = (userToEdit?: User) => {
    if (userToEdit) {
      form.setFieldsValue({ ...userToEdit });
      setEditingUser(userToEdit);
    }
    setIsModalVisible(true);
  };

  const handleCreateOrUpdateUser = async () => {
    try {
      const values = await form.validateFields();
      if (editingUser) {
        if (!editingUser._id) {
          console.error("User ID is undefined");
          Modal.error({
            title: "Error",
            content: "Failed to update user. User ID is missing.",
          });
          return;
        }
        const updatedUser = await updateUser(editingUser._id, values);
        setUsers((prevUsers) =>
          prevUsers?.map((user) =>
            user._id === editingUser._id ? updatedUser : user
          )
        );
        setEditingUser(null);
      } else {
        const newUser = await createUser(values);
        setUsers((prevUsers) => [...(prevUsers || []), newUser]);
      }
      Modal.success({
        content: editingUser
          ? "User updated successfully!"
          : "User created successfully!",
      });
      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error("Failed to submit:", error);
      Modal.error({
        title: "Error",
        content: "Failed to create or update user. Please try again later.",
      });
    }
  };

  const showDeleteConfirm = (id: string) => {
    Modal.confirm({
      title: "Are you sure you want to delete this user?",
      content: "This action cannot be undone",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleDelete(id);
      },
      onCancel() {
        console.log("Cancelled");
      },
    });
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteUser(id);
      setUsers((prevUsers) => prevUsers?.filter((user) => user._id !== id));
      Modal.success({
        content: "User deleted successfully!",
      });
    } catch (error) {
      console.error("Error deleting user:", error);
      Modal.error({
        title: "Error",
        content: "Failed to delete user. Please try again later.",
      });
    }
  };

  const handleEdit = (id: string) => {
    const userToEdit = users?.find((user) => user._id === id);
    if (userToEdit) {
      showModal(userToEdit);
    }
  };

  return (
    <Layout.Content
      style={{ padding: "50px", position: "relative" }}
      className={isBlurred ? "blur-content" : ""}
    >
      <Row justify="space-between" align="middle" className="content-header">
        <Col>
          <h2>Users</h2>
          <p>{users ? `Total: ${users.length}` : "Loading users..."}</p>
        </Col>
        <Col>
          <Button
            type="primary"
            className="new-user-button"
            onClick={() => showModal()}
          >
            New User
          </Button>
        </Col>
      </Row>
      <hr style={{ margin: "20px 0" }} />
      {loading ? (
        <p>Loading...</p>
      ) : users && users.length > 0 ? (
        <Row gutter={[16, 16]}>
          {users.map((user, index) => (
            <Col key={index} xs={24} sm={24} md={8} lg={8}>
              <Card className="user-card">
                <h3>{user.username}</h3>
                <p>Email: {user.email}</p>
                <p>Role: {user.role}</p>
                <Button
                  icon={<EditOutlined />}
                  onClick={() => user._id && handleEdit(user._id)}
                  className="user-card-button"
                >
                  Edit
                </Button>
                <Button
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => user._id && showDeleteConfirm(user._id)}
                  className="user-card-button"
                >
                  Delete
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No users found</p>
      )}
      <Modal
        title={editingUser ? "Edit User" : "Create User"}
        visible={isModalVisible}
        onOk={handleCreateOrUpdateUser}
        onCancel={() => setIsModalVisible(false)}
        okText={editingUser ? "Update" : "Create"}
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical" name="form_in_modal">
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please input the username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input the email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            rules={[
              { required: true, message: "Please select the user role!" },
            ]}
          >
            <Select>
              <Select.Option value="admin">Admin</Select.Option>
              <Select.Option value="user">User</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </Layout.Content>
  );
};

export default AdminContent;
