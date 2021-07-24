import { Link } from "react-router-dom";

import { Layout, Menu } from "antd";
import {
   HomeFilled,
   // MenuFoldOutlined,
   UserOutlined,
} from "@ant-design/icons";

import "./MenuSider.scss";

const MenuSider = ({ menuCollpsed }) => {
   const { Sider } = Layout;

   return (
      <Sider className="admin-sider" collapsed={menuCollpsed}>
         <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
         >
            <Menu.Item key="1">
               <Link to={"/admin"}>
                  <HomeFilled />
                  <span className="nav-text"> Home</span>
               </Link>
            </Menu.Item>

            {/*  */}

            <Menu.Item key="2">
               <Link to={"/admin/users"}>
                  <UserOutlined />
                  <span className="nav-text"> Usuarios </span>
               </Link>
            </Menu.Item>
         </Menu>
      </Sider>
   );
};

export default MenuSider;
