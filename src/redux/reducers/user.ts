import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: { firstName: "", lastName: "", mobile: "", password: "" } };

const userManagement = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logOutUser: () => initialState,
  },
});

export const { loginUser, logOutUser } = userManagement.actions;
export const User = userManagement.reducer;
