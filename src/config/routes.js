// ? admin
import LayoutAdmin from "../layouts/LayoutAdmin";
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";

// ? basic
import LayoutBasic from "../layouts/LayoutBasic";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const admin = {
   path: "/admin",
   component: LayoutAdmin,
   exact: false,
   routes: [
      {
         path: "/admin",
         component: AdminHome,
         exact: true,
      },
      {
         path: "/admin/login",
         component: AdminSignIn,
         exact: true,
      },
   ],
};
const normal = {
   path: "/",
   component: LayoutBasic,
   exact: false,
   routes: [
      {
         path: "/",
         component: Home,
         exact: true,
      },
      {
         path: "/contact",
         component: Contact,
         exact: true,
      },
   ],
};

const routes = [admin, normal];

export default routes;
