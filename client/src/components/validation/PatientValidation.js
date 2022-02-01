/* eslint-disable no-useless-escape */
import * as yup from "yup";

export const patientSchema = {
  register: yup.object().shape({
    fullName: yup.string().required("Please provide full name"),
    mobile: yup
      .string()
      .required("Please provide mobile number")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),
    email: yup
      .string()
      .email("Please provide a valid email")
      .required("Please provide a valid email"),
    password: yup
      .string()
      .required("Please provide a valid password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must   Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  }),

  login: yup.object().shape({
    email: yup
      .string()
      .email("Please provide a valid email")
      .required("Please provide a valid email"),
    password: yup
      .string()
      .required("Please provide a valid password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must   Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  }),
};
