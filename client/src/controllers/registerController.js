import { api } from "../api/baseUrl";

export const userRegistration = async (userData) => {
  try {
    const { data } = await api.post("/register", userData);

    // storing in localstorage
    localStorage.setItem("authToken", data.token);
    console.log(data);
    return data;
  } catch (error) {
    // console.log(error.response.data);
    return error.response.data;
  }
};
