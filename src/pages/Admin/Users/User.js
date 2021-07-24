import { useEffect, useState } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import { getUserApi } from "../../../api/user";

import "./User.scss";

const User = () => {
   const [users, setusers] = useState([]);

   const token = getAccessTokenApi();

   useEffect(() => {
      getUserApi(token).then((e) => setusers(e));
   }, [token]);
   console.log(users);

   return (
      <div>
         <h1>User List</h1>
      </div>
   );
};
export default User;
