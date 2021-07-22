import jwtDecode from "jwt-decode";

import { BASE_PATH, API_VERSION } from "./config";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constants";


export const getAccessToken = () => {
   const accessToken =
      localStorage.getItem(ACCESS_TOKEN) || null;

   if (!accessToken) return null;

   return willExpiredToken(accessToken) ? null : accessToken;
};

export const getRefreshToken = () => {
   const refreshToken =
      localStorage.getItem(REFRESH_TOKEN) || null;

   if (!refreshToken) return null;

   return willExpiredToken(refreshToken) ? null : refreshToken;
};

const willExpiredToken = (token) => {
   const seconds = 60;
   const metaToken = jwtDecode(token);

   const { exp } = metaToken;
   const now = (Date.now() + seconds) / 1000;

   return now > exp;
};
