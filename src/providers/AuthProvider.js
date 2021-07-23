import { createContext, useEffect, useState } from "react";

// ? others
import {
   getAccessTokenApi,
   getRefreshTokenApi,
   refreshAccessTokenApi,
   logout,
} from "../api/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [user, setuser] = useState({
      user: null,
      isloading: true,
   });

   return (
      <AuthContext.Provider value={user}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;
