// ? libreries
import { Layout } from "antd";

// ? recursos
import "./LayoutAdmin.scss";
import LoadRoutes from "./LoadRoutes";

// ? components
import MenuTop from "../components/Admin/Menutop";

// !---------------------------------------
const LayoutAdmin = (props) => {
   const { routes } = props;
   const { Header, Content, Footer } = Layout;

   return (
      <Layout>
         {/* Menu sider   */}
         <Layout className="layout-admin">
            <Header className="layout-admin__header">
               <MenuTop />
            </Header>
            <Content className="layout-admin__content">
               <LoadRoutes routes={routes} />
            </Content>
            <Footer className="layout-admin__footer">
               Gerardo mindanda
            </Footer>
         </Layout>
      </Layout>
   );
};

export default LayoutAdmin;
