import { Layout } from "antd";

import "./LayoutBasic.scss";
import LoadRoutes from "./LoadRoutes";

// !---------------------------------------
export const LayoutBasic = ({ routes }) => {
   const { Content, Footer } = Layout;

   return (
      <Layout>
         <h2>Menu Sider basic user...</h2>
         <Layout>
            <Content>
               <LoadRoutes routes={routes} />
            </Content>
            <Footer>Gerardo Miranda Basico</Footer>
         </Layout>
      </Layout>
   );
};

export default LayoutBasic;
