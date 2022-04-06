import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    isAuthenticated: localStorage.getItem("authToken") === null ? false : true,
    passwordChanged: "",
    userType: "",
    success: false,
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    setPasswordChanged: (state, action) => {
      state.passwordChanged = action.payload;
    },
  },
});

export const authUser = (state) => state.auth;

// exporting actions
export const { setAuthUser, setPasswordChanged, setUserType, setSuccess } =
  authSlice.actions;

// exporting reducer
export default authSlice.reducer;
