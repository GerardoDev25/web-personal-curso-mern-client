import { Route } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutAdmin.scss";

// ? function that load the subRoutes
const LoadRoutes = ({ routes }) => {
   console.log(routes);
   return routes.map((route, index) => (
      <Route
         key={index}
         exact={route.exact}
         path={route.path}
         component={route.component}
      />
   ));
};

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
