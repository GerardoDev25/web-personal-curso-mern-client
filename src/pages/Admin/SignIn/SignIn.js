import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";

import "./SignIn.scss";
import logo from "../../../assets/img/png/3.1 logo-white.png";

const SignIn = () => {
   const { Content } = Layout;
   const { TabPane } = Tabs;

   return (
      <Layout className="sign-in">
         <Content className="sign-in__content">
            <h1 className="sign-in__content-logo">
               <img src={logo} alt="Logo" />
            </h1>
            <div className="sign-in__content-tabs">
               <Tabs type="card">
                  <TabPane key="1" tab={<span>Entrar</span>}>
                     Componente Logo Form
                  </TabPane>

                  <TabPane
                     key="2"
                     tab={<span>Nuevo Usuario</span>}
                  >
                     Componente Register Form
                  </TabPane>
               </Tabs>
            </div>
         </Content>
      </Layout>
   );
};
export default SignIn;
