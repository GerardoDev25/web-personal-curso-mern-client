import {
   Form,
   Button,
   Input,
   Checkbox,
   notification,
} from "antd";
import { UserAddOutlined, LockFilled } from "@ant-design/icons";

import "./RegisterForm.scss";

const RegisterForm = () => {

    
   const handleSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <form className="register-form" onSubmit={handleSubmit}>
         {/*  */}

         <Form.Item>
            <Input
               prefix={
                  <UserAddOutlined
                     style={{
                        marginRight: "10px",
                        color: "rgba(0,0,0,0.35)",
                     }}
                  />
               }
               type="email"
               name="email"
               placeholder="Correo electronico"
               className="register-form__input"
            />
         </Form.Item>

         {/*  */}

         <Form.Item>
            <Input
               prefix={
                  <LockFilled
                     style={{
                        marginRight: "10px",
                        color: "rgba(0,0,0,0.35)",
                     }}
                  />
               }
               type="password"
               name="password"
               placeholder="Contraseña"
               className="register-form__input"
            />
         </Form.Item>

         {/*  */}

         <Form.Item>
            <Input
               prefix={
                  <LockFilled
                     style={{
                        marginRight: "10px",
                        color: "rgba(0,0,0,0.35)",
                     }}
                  />
               }
               type="password"
               name="password2"
               placeholder="Repita Contraseña"
               className="register-form__input"
            />
         </Form.Item>

         {/*  */}

         <Form.Item>
            <Checkbox name="privacyPolity">
               He leido y acepto la politica de privacidad
            </Checkbox>
         </Form.Item>

         {/*  */}

         <Form.Item>
            <Button
               htmlType="submit"
               className="register-form__input"
            >
               Crear Cuenta
            </Button>
         </Form.Item>
      </form>
   );
};

export default RegisterForm;
