import { useState } from "react";

import {
   Form,
   Button,
   Input,
   Checkbox,
   // notification,
} from "antd";
import { UserAddOutlined, LockFilled } from "@ant-design/icons";

import "./RegisterForm.scss";

const RegisterForm = () => {
   const [inputs, setinputs] = useState({
      email: "",
      password: "",
      password2: "",
      privacyPolity: false,
   });

   const { email, password, password2, privacyPolity } = inputs;

   const handleChange = ({ target }) => {
      setinputs({
         ...inputs,
         [target.name]: target.checked
            ? target.checked
            : target.value,
      });
   };

   // ? function handle the submit
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
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
               placeholder="Correo electronico"
               className="register-form__input"
               name="email"
               value={email}
               onChange={handleChange}
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
               placeholder="Contraseña"
               className="register-form__input"
               autoComplete="off"
               name="password"
               value={password}
               onChange={handleChange}
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
               placeholder="Repita Contraseña"
               className="register-form__input"
               autoComplete="off"
               name="password2"
               value={password2}
               onChange={handleChange}
            />
         </Form.Item>

         {/*  */}

         <Form.Item>
            <Checkbox
               name="privacyPolity"
               checked={privacyPolity}
               onChange={handleChange}
            >
               He leido y acepto la politica de privacidad
            </Checkbox>
         </Form.Item>

         {/*  */}

         <Form.Item>
            <Button
               htmlType="submit"
               className="register-form__button"
            >
               Crear Cuenta
            </Button>
         </Form.Item>
      </form>
   );
};

export default RegisterForm;
