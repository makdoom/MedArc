import { createSlice } from "@reduxjs/toolkit";

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
