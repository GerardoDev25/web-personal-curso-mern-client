import "./App.scss";
import Admin from "./pages/Admin";
import SignIn from "./pages/Admin/SignIn";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
   return (
      <>
         <h1>Hestamos en app js</h1>;
         <Admin />
         <SignIn />
         <Home />
         <Contact />
      </>
   );
}

export default App;
