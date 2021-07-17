import { Layout } from "antd";

import "./LayoutAdmin.scss";
import LoadRoutes from "./LoadRoutes";

// !---------------------------------------
const LayoutAdmin = (props) => {
   const { routes } = props;
   const { Header, Content, Footer } = Layout;

   return (
      <Layout>
         <h2>Menu Sidebar Admin</h2>
         <Layout>
            <Header>Header</Header>
            <Content>
               <LoadRoutes routes={routes} />
            </Content>
            <Footer>Gerardo mindanda</Footer>
         </Layout>
      </Layout>
   );
};

export default LayoutAdmin;
