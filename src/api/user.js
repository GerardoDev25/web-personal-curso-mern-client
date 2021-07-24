import { API_VERSION, BASE_PATH } from "./config";

// http://localhost:3977/api/v4//sign-up
// ? funtion for make Sign up
export const signUpApi = (data) => {
   const url = `${BASE_PATH}/${API_VERSION}/sign-up`;
   const params = {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
   };

   return fetch(url, params)
      .then((response) => response.json())
      .then((result) =>
         result.user
            ? { message: result.message, ok: true }
            : { message: result.message, ok: false }
      )
      .catch((err) => ({ message: err.message, ok: false }));
};

// ? funtion for make Sign in
export const signInApi = (data) => {
   const url = `${BASE_PATH}/${API_VERSION}/sign-in`;

   const params = {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
   };

   return fetch(url, params)
      .then((response) => response.json())
      .then((result) =>
         result.accessToken
            ? result
            : { message: result.message, ok: false }
      )
      .catch((err) => ({ message: err.message, ok: false }));
};

export const getUserApi = (token) => {
   const url = `${BASE_PATH}/${API_VERSION}/users`;
   const params = {
      method: "GET",
      mode: "cors",
      headers: {
         "Content-Type": "application/json",
         Authorization: token,
      },
   };

   return fetch(url, params)
      .then((response) => response.json())
      .then((result) => result)
      .catch((e) => e.message);
};

export const getUserActiveApi = (token, status) => {
   const url = `${BASE_PATH}/${API_VERSION}/users-active?active=${status}`;
   const params = {
      method: "GET",
      mode: "cors",
      headers: {
         "Content-Type": "application/json",
         Authorization: token,
      },
   };

   return fetch(url, params)
      .then((response) => response.json())
      .then((result) => result)
      .catch((e) => e.message);
};
