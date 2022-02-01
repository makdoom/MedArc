import { api } from "../api/baseUrl";

export const forgotPassword = async (email) => {
  try {
    const { data } = await api.post("/forgot-password", { email });
    // console.log("Forgot password", data);
    return data;
  } catch (error) {
    // console.log(error.response.data);
    return error.response.data;
  }
};
