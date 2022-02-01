import { api } from "../api/baseUrl";

// Forgot password
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

// Reset Password
export const resetPassword = async (newPassword, token) => {
  try {
    const { data } = await api.put(`/reset-password/${token}`, {
      password: newPassword,
    });
    console.log("Forgot password", data);
    return data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};
