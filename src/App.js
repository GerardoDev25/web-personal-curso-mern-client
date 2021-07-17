import "./App.scss";

import {
   BrowserRouter as Router,
   Switch,
   Route,
   // Link,
} from "react-router-dom";

import routes from "./config/routes";

const RouteWithSubRoutes = (route) => {
   console.log(route);
   return (
      <Route
         exact={route.exact}
         path={route.path}
         render={(props) => (
            <route.component routes={route.routes} {...props} />
         )}
      />
   );
};

function App() {
   return (
      <>
         <Router>
            <Switch>
               {routes.map((route, index) => (
                  <RouteWithSubRoutes key={index} {...route} />
               ))}
            </Switch>
         </Router>
      </>
   );
}

export default App;
