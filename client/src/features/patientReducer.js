import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/baseUrl";
import { setUserType } from "./authReducer";

// Create patient slice
export const patientSlice = createSlice({
  name: "patient",
  initialState: {
    value: {
      name: "Makdoom",
    },
  },
  reducers: {
    registerPatient: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectedPatient = (state) => state.patient.value;

// exporting actions
export const { registerPatient } = patientSlice.actions;

// exporting reducer
export default patientSlice.reducer;

export const patientLogin = (patientData) => async (dispatch) => {
  try {
    const { data } = await api.post("/login", patientData);

    // storing in localstorage
    localStorage.setItem("authToken", data.token);

    dispatch(setUserType(patientData.userType));

    console.log("Logindata", data);
    return data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};
