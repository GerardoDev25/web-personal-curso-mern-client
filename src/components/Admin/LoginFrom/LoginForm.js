import "./LoginForm.scss";
// ? libraries
import { Form, Button, Input, notification } from "antd";
import { UserOutlined, LockFilled } from "@ant-design/icons";

const LoginForm = () => {
   return (
      <Form className="login-form">
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
      </Form>
   );
};
export default LoginForm;
