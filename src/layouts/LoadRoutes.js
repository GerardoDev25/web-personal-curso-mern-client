import { Route, Switch } from "react-router-dom";

// ? function that load the subRoutes
const LoadRoutes = ({ routes }) => {
   return (
      <Switch>
         {routes.map((route, index) => (
            <Route
               key={index}
               exact={route.exact}
               path={route.path}
               component={route.component}
            />
         ))}
      </Switch>
   );
};

export default LoadRoutes;
