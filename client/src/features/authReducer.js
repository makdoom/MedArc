import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    value: {
      isAuthenticated:
        localStorage.getItem("authToken") === null ? false : true,
    },
  },
  reducers: {
    setAuthUser: (state, action) => {
      console.log("action", action);
      state.value.isAuthenticated = action.payload;
      console.log("auth", state.value.isAuthenticated);
    },
  },
});

export const authenticatedUser = (state) => state.auth.value;

// exporting actions
export const { setAuthUser } = authSlice.actions;

// exporting reducer
export default authSlice.reducer;
