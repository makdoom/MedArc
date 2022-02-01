import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    value: {
      isAuthenticated:
        localStorage.getItem("authToken") === null ? false : true,
      passwordChanged: "",
    },
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.value.isAuthenticated = action.payload;
    },

    setPasswordChanged: (state, action) => {
      state.value.passwordChanged = action.payload;
    },
  },
});

export const authUser = (state) => state.auth.value;

// exporting actions
export const { setAuthUser, setPasswordChanged } = authSlice.actions;

// exporting reducer
export default authSlice.reducer;
