import { Menu } from "antd";
import {
  CalendarOutlined,
  AppstoreOutlined,
  ContainerOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const SidebarMenu: React.FC = () => (
  <Menu
    theme="dark"
    defaultSelectedKeys={["1"]}
    mode="vertical"
    items={[
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
    ]}
  />
);

export default SidebarMenu;
