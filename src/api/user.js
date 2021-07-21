import { API_VERSION, BASE_PATH } from "./config";

// http://localhost:3977/api/v4//sign-up
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
