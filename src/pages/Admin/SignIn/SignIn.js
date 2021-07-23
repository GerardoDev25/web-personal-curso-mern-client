// ? libraries
import { Layout, Tabs } from "antd";
// import { Redirect } from "react-router-dom";

// ? others
import "./SignIn.scss";
import logo from "../../../assets/img/png/3.1 logo-white.png";
import { getAccessTokenApi } from "../../../api/auth";

// ? components
import LoginForm from "../../../components/Admin/LoginFrom";
import RegisterForm from "../../../components/Admin/RegisterForm";
import { Redirect } from "react-router-dom";

const SignIn = () => {
   const { Content } = Layout;
   const { TabPane } = Tabs;

   if (getAccessTokenApi()) {
      return <Redirect to="/admin" />;
   }

   return (
      <Layout className="sign-in">
         <Content className="sign-in__content">
            <h1 className="sign-in__content-logo">
               <img src={logo} alt="Logo" />
            </h1>
            <div className="sign-in__content-tabs">
               <Tabs type="card">
                  <TabPane key="1" tab={<span>Entrar</span>}>
                     {/* Componente Login Form */}

                     <LoginForm />
                  </TabPane>

                  <TabPane
                     key="2"
                     tab={<span>Nuevo Usuario</span>}
                  >
                     {/* Componente Register Form */}
                     <RegisterForm />
                  </TabPane>
               </Tabs>
            </div>
         </Content>
      </Layout>
   );
};
export default SignIn;
