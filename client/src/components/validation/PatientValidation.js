import * as yup from "yup";

export const patientSchema = yup.object().shape({
  fullName: yup.string().required("Please provide full name"),
  mobile: yup
    .string()
    .required("Please provide mobile number")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  email: yup.string().email().required("Please provide a valid email"),
  password: yup
    .string()
    .min(4, "Password must be at least 4 chrachters long")
    .max(15, "Password must be at most 15 chrachters")
    .required("Please provide a valid password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});
