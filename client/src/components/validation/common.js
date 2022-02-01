/* eslint-disable no-useless-escape */
import * as yup from "yup";

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please provide a valid email")
    .required("Please provide a valid email"),
});
