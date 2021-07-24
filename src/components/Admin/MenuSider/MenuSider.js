import { Link, withRouter } from "react-router-dom";

import { Layout, Menu } from "antd";
import {
   HomeFilled,
   // MenuFoldOutlined,
   UserOutlined,
} from "@ant-design/icons";

import "./MenuSider.scss";

const MenuSider = ({ menuCollpsed, location }) => {
   const { Sider } = Layout;

   return (
      <Sider className="admin-sider" collapsed={menuCollpsed}>
         <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={location.pathname}
         >
            <Menu.Item key="/admin">
               <Link to={"/admin"}>
                  <HomeFilled />
                  <span className="nav-text"> Home</span>
               </Link>
            </Menu.Item>

            {/*  */}

            <Menu.Item key="/admin/users">
               <Link to={"/admin/users"}>
                  <UserOutlined />
                  <span className="nav-text"> Usuarios </span>
               </Link>
            </Menu.Item>
         </Menu>
      </Sider>
   );
};

export default withRouter(MenuSider);
