import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  insurance: {
    carType: null,
    carModel: null,
    insuranceCompany: null,
    thirdPartyInsurance: null,
    driverThirdPartyInsurance: null,
  },
};

const insuranceManagement = createSlice({
  name: "insurance",
  initialState,
  reducers: {
    pushInsurance: (state, action) => {
      state.insurance = { ...state.insurance, ...action.payload };
    },
    clearInsurance: () => initialState,
  },
});

export const { pushInsurance, clearInsurance } = insuranceManagement.actions;
export const Insurance = insuranceManagement.reducer;
