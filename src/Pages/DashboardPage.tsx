import { useState } from "react";
import { Layout } from "antd";
import {
  UserProfile,
  SidebarMenu,
  ToggleButton,
  LogoutButton,
} from "../components";
import ContentArea from "../containers/ContentArea";
import AdminContent from "../components/AdminContent";
import "../App.css";

const { Sider } = Layout;

function DashboardPage() {
  const [collapsed, setCollapsed] = useState(true);
  const handleToggle = () => setCollapsed((prevState) => !prevState);

  const userRole = localStorage.getItem("role") as "admin" | "user";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={250}
        theme="dark"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          setCollapsed(broken);
        }}
        collapsible
        collapsed={collapsed}
      >
        <UserProfile initials="M." />
        <SidebarMenu userRole={userRole} />
        <LogoutButton />
      </Sider>
      <ToggleButton onClick={handleToggle} />
      {userRole === "admin" ? (
        <AdminContent isBlurred={!collapsed} />
      ) : (
        <ContentArea isBlurred={!collapsed} />
      )}
    </Layout>
  );
}

export default DashboardPage;
