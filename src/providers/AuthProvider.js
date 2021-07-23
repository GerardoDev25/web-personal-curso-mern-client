import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

// ? others
import {
   getAccessTokenApi,
   getRefreshTokenApi,
   refreshAccessTokenApi,
   logout,
} from "../api/auth";

export const AuthContext = createContext();

const checkUserLogin = (setUser) => {
   const accessToken = getAccessTokenApi();

   if (!accessToken) {
      const refreshToken = getRefreshTokenApi();
      if (!refreshToken) {
         logout();
         setUser({
            user: null,
            isloading: false,
         });
      } else {
         refreshAccessTokenApi(refreshToken);
      }
   } else {
      setUser({
         user: jwtDecode(accessToken),
         isloading: false,
      });
   }
};

const AuthProvider = ({ children }) => {
   const [user, setuser] = useState({
      user: null,
      isloading: true,
   });

   useEffect(() => {
      checkUserLogin(setuser);
   }, [setuser]);

   return (
      <AuthContext.Provider value={user}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;
