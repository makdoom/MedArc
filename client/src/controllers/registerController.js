import { api } from "../api/baseUrl";

export const patientRegistration = async (patientData) => {
  try {
    const { data } = await api.post("/register", patientData);

    // storing in localstorage
    localStorage.setItem("authToken", data.token);
    return data;
  } catch (error) {
    return error.response.data;
  }
};
