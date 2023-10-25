import { Menu } from "antd";
import {
  CalendarOutlined,
  AppstoreOutlined,
  ContainerOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const SidebarMenu: React.FC = () => (
  <Menu theme="dark" defaultSelectedKeys={["1"]} mode="vertical">
    <Menu.Item key="1" icon={<CalendarOutlined />}>
      Today
    </Menu.Item>
    <Menu.Item key="2" icon={<AppstoreOutlined />}>
      All
    </Menu.Item>
    <Menu.Item key="3" icon={<ContainerOutlined />}>
      Week
    </Menu.Item>
    <Menu.Item key="4" icon={<CheckCircleOutlined />}>
      Completed
    </Menu.Item>
  </Menu>
);

export default SidebarMenu;
