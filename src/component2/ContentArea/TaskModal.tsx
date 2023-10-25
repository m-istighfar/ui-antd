// import { Modal, Form, Input, Select, DatePicker } from "antd";
// import moment from "moment";
// import { Task } from "../../api";
// import React from "react";

// interface TaskModalProps {
//   isVisible: boolean;
//   onSave: (taskData: Task) => Promise<void>;
//   onCancel: () => void;
//   editingTask: Task | null;
// }

// const TaskModal: React.FC<TaskModalProps> = ({
//   isVisible,
//   onSave,
//   onCancel,
//   editingTask,
// }) => {
//   const [form] = Form.useForm();

//   React.useEffect(() => {
//     if (editingTask) {
//       form.setFieldsValue({
//         ...editingTask,
//         dueDate: moment(editingTask.dueDate),
//       });
//     }
//   }, [editingTask, form]);

//   const handleSave = async () => {
//     try {
//       const values = await form.validateFields();
//       onSave(values);
//       form.resetFields();
//     } catch (error) {
//       console.error("Failed to submit:", error);
//     }
//   };

//   return (
//     <Modal
//       title={editingTask ? "Edit Task" : "New Task"}
//       open={isVisible}
//       onOk={handleSave}
//       onCancel={onCancel}
//       centered
//       okButtonProps={{
//         className: "modal-ok-button",
//       }}
//     >
//       <Form
//         form={form}
//         layout="vertical"
//         initialValues={editingTask ? {} : { dueDate: moment() }} // Set default dueDate for new tasks
//       >
//         <Form.Item
//           label="Title"
//           name="title"
//           rules={[{ required: true, message: "Please input the title!" }]}
//         >
//           <Input placeholder="Task title" />
//         </Form.Item>
//         <Form.Item label="Description" name="description">
//           <Input.TextArea placeholder="Task description" />
//         </Form.Item>
//         <Form.Item
//           label="Priority"
//           name="priority"
//           rules={[{ required: true, message: "Please select the priority!" }]}
//         >
//           <Select>
//             <Select.Option value="high">High</Select.Option>
//             <Select.Option value="medium">Medium</Select.Option>
//             <Select.Option value="low">Low</Select.Option>
//           </Select>
//         </Form.Item>
//         <Form.Item
//           label="Status"
//           name="status"
//           rules={[{ required: true, message: "Please select the status!" }]}
//         >
//           <Select>
//             <Select.Option value="pending">Pending</Select.Option>
//             <Select.Option value="completed">Completed</Select.Option>
//           </Select>
//         </Form.Item>
//         <Form.Item
//           label="Due Date"
//           name="dueDate"
//           rules={[{ required: true, message: "Please select the due date!" }]}
//         >
//           <DatePicker format="YYYY-MM-DD" />
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

// export default TaskModal;
