import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: { firstName: "", lastName: "", mobile: "", password: "" } };

const userManagement = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logOutUser: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { loginUser, logOutUser } = userManagement.actions;
export const User = userManagement.reducer;
