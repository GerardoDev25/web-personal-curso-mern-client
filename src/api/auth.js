import jwtDecode from "jwt-decode";

import { BASE_PATH, API_VERSION } from "./config";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constants";

// ? funtion for the get accessToken
export const getAccessTokenApi = () => {
   const accessToken =
      localStorage.getItem(ACCESS_TOKEN) || null;

   if (!accessToken) return null;

   return willExpiredToken(accessToken) ? null : accessToken;
};

// ? funtion for the get refeshToken
export const getRefreshTokenApi = () => {
   const refreshToken =
      localStorage.getItem(REFRESH_TOKEN) || null;

   if (!refreshToken) return null;

   return willExpiredToken(refreshToken) ? null : refreshToken;
};

// ? funtion that refresh the token in the localStorage
export const refreshAccessTokenApi = (refreshToken) => {
   const url = `${BASE_PATH}/${API_VERSION}/refresh-access-token`;

   const bodyObj = { refreshToken };

   const params = {
      method: "POST",
      body: JSON.stringify(bodyObj),
      headers: { "Content-Type": "application/json" },
   };

   fetch(url, params)
      .then((response) =>
         response.status === 200 ? response.json() : null
      )
      .then((result) => {
         if (!result) {
            //
            // * make a logout
            logout();
         } else {
            //
            // * make a refresh the tokens
            const { accessToken, refreshToken } = result;
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            localStorage.setItem(REFRESH_TOKEN, refreshToken);
         }
      })
      .catch();
};

// ? funtion that remove the token of the localStorage
export const logout = () => {
   localStorage.removeItem(ACCESS_TOKEN);
   localStorage.removeItem(REFRESH_TOKEN);
};

// ? funtion that compare if the token to expired
const willExpiredToken = (token) => {
   const seconds = 60;
   const metaToken = jwtDecode(token);

   const { exp } = metaToken;
   const now = (Date.now() + seconds) / 1000;

   return now > exp;
};
