/* eslint-disable no-useless-escape */
const removeClassErrorSuccess = (inputData) => {
   inputData.classList.remove("success");
   inputData.classList.remove("error");
};

export const minLengValidation = (inputData, minlenght) => {
   const { value } = inputData;
   removeClassErrorSuccess(inputData);

   value.lenght >= minlenght
      ? inputData.classList.add("success")
      : inputData.classList.add("error");

   return value.lenght >= minlenght;
};

export const emailValidation = (inputData) => {
   const emailValid =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   const { value } = inputData;

   removeClassErrorSuccess(inputData);
   const resultValidation = emailValid.test(value);

   resultValidation
      ? inputData.classList.add("success")
      : inputData.classList.add("error");

   return resultValidation;
};
