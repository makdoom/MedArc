/* eslint-disable no-useless-escape */
import * as yup from "yup";

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please provide a valid email")
    .required("Please provide a valid email"),
});

export const resetPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required("Please provide a valid password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Password doesn't match"),
});
