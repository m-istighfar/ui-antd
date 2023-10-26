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

const { Sider } = Layout;

const userRole = localStorage.getItem("role");

import "../App.css";

function DashboardPage() {
  const [collapsed, setCollapsed] = useState(true);
  const handleToggle = () => setCollapsed((prevState) => !prevState);

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
        <SidebarMenu />
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
