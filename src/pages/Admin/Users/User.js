import { useEffect, useState } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import { getUserActiveApi } from "../../../api/user";

import "./User.scss";

const User = () => {
   const [usersActive, setusersActive] = useState([]);
   const [usersInactive, setusersInactive] = useState([]);

   const token = getAccessTokenApi();

   console.log({ usersActive, usersInactive });

   useEffect(() => {
      getUserActiveApi(token, true).then((e) =>
         setusersActive(e)
      );
      getUserActiveApi(token, false).then((e) =>
         setusersInactive(e)
      );
   }, [token]);

   return (
      <div>
         <h1>User List</h1>
      </div>
   );
};
export default User;
