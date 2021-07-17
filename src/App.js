import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   Redirect,
} from "react-router-dom";
import "./App.scss";

function App() {
   return (
      <Router>
         <div className="App">
            <h1>Sistemas de rutas basicas</h1>

            <nav>
               <ul>
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                     <Link to="/users">Users</Link>
                  </li>
               </ul>
            </nav>

            <Switch>
               <Route exact path="/" component={Home} />
               <Route
                  exact
                  path="/contact"
                  component={Contact}
               />
               <Route exact path="/users" component={Users} />

               <Route component={Error404} />
            </Switch>
         </div>
      </Router>
   );
}

function Home() {
   return <h2>Estamos en el componenete home</h2>;
}

function Contact() {
   return <h2>Componenete contact</h2>;
}

function Users() {
   return <h2>Estamos en el componenete user</h2>;
}

function Error404() {
   return <h2>Error 404</h2>;
}
export default App;
