import { useState } from "react";

// ? libraries
import { Form, Button, Input, notification } from "antd";
import { UserOutlined, LockFilled } from "@ant-design/icons";

// ? others
import "./LoginForm.scss";
import { signInApi } from "../../../api/user";
import {
   ACCESS_TOKEN,
   REFRESH_TOKEN,
} from "../../../utils/constants";

const LoginForm = () => {
   const [inputs, setinputs] = useState({
      email: "",
      password: "",
   });

   const onChangeForm = ({ target }) => {
      setinputs({
         ...inputs,
         [target.name]: target.value,
      });
   };

   const login = async (e) => {
      e.preventDefault();

      // ? make login
      const result = await signInApi(inputs);

      if (result.message) {
         notification.error({
            message: result.message,
         });
      } else {
         const { accessToken, refreshToken } = result;

         localStorage.setItem(ACCESS_TOKEN, accessToken);
         localStorage.setItem(REFRESH_TOKEN, refreshToken);

         notification.success({
            message: "Login",
         });

         window.location.href = "/admin";
      }
   };

   return (
      <form
         className="login-form"
         onChange={onChangeForm}
         onSubmit={login}
      >
         <Form.Item>
            <Input
               prefix={
                  <UserOutlined
                     style={{ color: "rgba(0,0,0,0.25)" }}
                  />
               }
               type="email"
               name="email"
               placeholder="Correo Electronico"
               className="login-form__input"
            />
         </Form.Item>

         {/*  */}

         <Form.Item>
            <Input
               prefix={
                  <LockFilled
                     style={{ color: "rgba(0,0,0,0.25)" }}
                  />
               }
               type="password"
               name="password"
               placeholder="Contraseña"
               className="login-form__input"
            />
         </Form.Item>

         {/*  */}

         <Form.Item>
            <Button
               htmlType="submit "
               className="login-form__button"
            >
               Entrar
            </Button>
         </Form.Item>
      </form>
   );
};
export default LoginForm;
