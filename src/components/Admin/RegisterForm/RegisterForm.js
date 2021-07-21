import { useState } from "react";

// ? libraries
import {
   Form,
   Button,
   Input,
   Checkbox,
   notification,
} from "antd";
import { UserAddOutlined, LockFilled } from "@ant-design/icons";

// ? others
import "./RegisterForm.scss";
import {
   emailValidation,
   handleAddRemoveClass,
   matchesPasswords,
   minLengthValidation,
} from "../../../utils/formValidation";
import { signUpApi } from "../../../api/user";

// !-------------------------------------------------
//
const RegisterForm = () => {
   //

   // * values the inputs
   const [inputs, setinputs] = useState({
      email: "",
      password: "",
      password2: "",
      privacyPolity: false,
   });

   const { email, password, password2, privacyPolity } = inputs;

   // * values of the inputs valided
   const [inputsValid, setinputsValid] = useState({
      emailValid: false,
      passwordValid: false,
      password2Valid: false,
      privacyPolityValid: false,
   });

   const {
      emailValid,
      passwordValid,
      password2Valid,
      privacyPolityValid,
   } = inputsValid;

   // * refetences of the tag inputs
   const emailId = document.getElementById("emailId");
   const passwordId = document.getElementById("passwordId");
   const password2Id = document.getElementById("password2Id");

   // ? funtion handle the changes in the input
   const handleChange = ({ target }) => {
      setinputs({
         ...inputs,
         [target.name]: target.value,
      });

      // * check the valid value of the inputs
      if (target.name === "email") {
         setinputsValid({
            ...inputsValid,
            emailValid: emailValidation(emailId),
         });
      } else if (target.name.includes("password")) {
         setinputsValid({
            ...inputsValid,
            passwordValid: minLengthValidation(passwordId, 3),
            password2Valid: matchesPasswords(
               passwordId,
               password2Id,
               3
            ),
         });
      }
   };

   // ? funtion handle the changes in the checkbox
   const handleCheckbox = ({ target }) => {
      setinputsValid({
         ...inputsValid,
         privacyPolityValid: !privacyPolity,
      });
      setinputs({
         ...inputs,
         [target.name]: !privacyPolity,
      });
   };

   // ? function handle the submit
   const handleSubmit = async (e) => {
      e.preventDefault();

      // * add class success or error
      handleAddRemoveClass(emailId, emailValid);
      handleAddRemoveClass(passwordId, passwordValid);
      handleAddRemoveClass(password2Id, password2Valid);

      // * valid form imputs
      if (
         !emailValid ||
         !passwordValid ||
         !password2Valid ||
         !privacyPolityValid
      ) {
         notification["error"]({
            message: "Error Todos los campos son obligatorios",
         });
      } else {
         // todo conectar con el api y crear usuario
         const result = await signUpApi(inputs);
         // console.log(result);

         result.ok
            ? notification["success"]({
                 message: result.message,
              })
            : notification["error"]({
                 message: result.message,
              });
      }
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
               id="emailId"
               autoComplete="of"
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
               id="passwordId"
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
               id="password2Id"
            />
         </Form.Item>

         {/*  */}

         <Form.Item>
            <Checkbox
               name="privacyPolity"
               checked={privacyPolity}
               onChange={handleCheckbox}
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
