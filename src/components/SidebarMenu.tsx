import React from "react";
import { Menu } from "antd";
import {
  CalendarOutlined,
  AppstoreOutlined,
  ContainerOutlined,
  CheckCircleOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

interface SidebarMenuProps {
  userRole: "user" | "admin";
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ userRole }) => {
  const items =
    userRole === "admin"
      ? [
          {
            key: "1",
            icon: <DashboardOutlined />,
            label: "Dashboard Admin",
          },
        ]
      : [
          {
            key: "1",
            icon: <CalendarOutlined />,
            label: "Today",
          },
          {
            key: "2",
            icon: <AppstoreOutlined />,
            label: "All",
          },
          {
            key: "3",
            icon: <ContainerOutlined />,
            label: "Week",
          },
          {
            key: "4",
            icon: <CheckCircleOutlined />,
            label: "Completed",
          },
        ];

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["1"]}
      mode="vertical"
      items={items}
    />
  );
};

export default SidebarMenu;
