import { Route } from "react-router-dom";

// ? function that load the subRoutes
const LoadRoutes = ({ routes }) => {
   return routes.map((route, index) => (
      <Route
         key={index}
         exact={route.exact}
         path={route.path}
         component={route.component}
      />
   ));
};

export default LoadRoutes;
