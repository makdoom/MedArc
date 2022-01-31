import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    value: {
      isAuthenticated:
        localStorage.getItem("authToken") === null ? false : true,
    },
  },
  reducers: {},
});

export const isAuthenticated = (state) => state.auth.value;

export default authSlice.reducer;
