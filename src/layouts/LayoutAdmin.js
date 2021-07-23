// ? libreries
import { Layout } from "antd";
import { useState } from "react";
import { Redirect, Route } from "react-router-dom";

// ? recursos
import "./LayoutAdmin.scss";
import LoadRoutes from "./LoadRoutes";
import useAuth from "../hooks/useAuth";

// ? components
import MenuTop from "../components/Admin/Menutop";
import MenuSider from "../components/Admin/MenuSider";
import AdminSignIn from "../pages/Admin/SignIn";

// !---------------------------------------
const LayoutAdmin = (props) => {
   const [menuCollpsed, setmenuCollpsed] = useState(false);
   const { routes } = props;
   const { Header, Content, Footer } = Layout;

   const { user, isloading } = useAuth();

   // ? si no esta logeado redirecciona a ligon
   if (!user && !isloading) {
      return (
         <>
            <Route path="/admin/login" component={AdminSignIn} />
            <Redirect to="/admin/login" />
         </>
      );
   }

   if (user && !isloading) {
      return (
         <Layout>
            <MenuSider menuCollpsed={menuCollpsed} />
            <Layout
               className="layout-admin"
               style={{
                  marginLeft: menuCollpsed ? "80px" : "200px",
               }}
            >
               {/* HEADER */}
               <Header className="layout-admin__header">
                  <MenuTop
                     setmenuCollpsed={setmenuCollpsed}
                     menuCollpsed={menuCollpsed}
                  />
               </Header>

               {/* MAIN */}
               <Content className="layout-admin__content">
                  <LoadRoutes routes={routes} />
               </Content>

               {/* FOOTER */}
               <Footer className="layout-admin__footer">
                  Gerardo mindanda
               </Footer>
            </Layout>
         </Layout>
      );
   }
   return null;
};

export default LayoutAdmin;
