import "./App.scss";

import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";

import routes from "./config/routes";
import AuthProvider from "./providers/AuthProvider";

// ? function that render the component
const RouteWithSubRoutes = (route) => {
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

// !-----------------------------------
function App() {
   return (
      <AuthProvider>
         <Router>
            <Switch>
               {routes.map((route, index) => (
                  <RouteWithSubRoutes key={index} {...route} />
               ))}
            </Switch>
         </Router>
      </AuthProvider>
   );
}

export default App;
