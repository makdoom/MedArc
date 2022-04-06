import { api } from "../api/baseUrl";

export const patientLogin = async (patientData) => {
  try {
    const { data } = await api.post("/login", patientData);

    // storing in localstorage
    localStorage.setItem("authToken", data.token);

    console.log("Logindata", data);
    return data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};
