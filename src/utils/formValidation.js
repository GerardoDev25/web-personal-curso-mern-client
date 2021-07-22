/* eslint-disable no-useless-escape */

export const removeClass = (inputData) => {
   if (!inputData) {
      return;
   }

   inputData.classList.remove("success");
   inputData.classList.remove("error");
};

// ? funtio for add and remeve are class css
export const handleAddRemoveClass = (inputData, boolean) => {
   if (!inputData) {
      return;
   }
   
   removeClass(inputData);
   
   boolean
      ? inputData.classList.add("success")
      : inputData.classList.add("error");
};

// ? funtion that valida the min lenght the inputs
export const minLengthValidation = (inputData, minlength) => {
   if (inputData) {
      const { value } = inputData;
      return value.length >= minlength;
   }
   return false;
};

// ? funtion that valida the min lenght the inputs
export const matchesPasswords = (password, password2) => {
   if (password && password2)
      return password.value === password2.value;

   return false;
};

// ? funtion that valida the email
export const emailValidation = (inputData) => {
   if (inputData) {
      const emailValid =
         /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      const { value } = inputData;
      const resultValidation = emailValid.test(value);
      return resultValidation;
   }
   return false;
};
