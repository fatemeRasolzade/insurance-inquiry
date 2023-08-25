import { createSlice } from "@reduxjs/toolkit";

const initialState = { insurance: { carType: "", modelType: "" } };

const insuranceManagement = createSlice({
  name: "insurance",
  initialState,
  reducers: {
    pushInsurance: (state, action) => {
      state.insurance = { ...state.insurance, ...action.payload };
    },
  },
});

export const { pushInsurance } = insuranceManagement.actions;
export const Insurance = insuranceManagement.reducer;
