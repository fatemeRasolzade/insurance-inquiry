import { configureStore } from "@reduxjs/toolkit";
import { User } from "@/redux/reducers/user/user";
import { Insurance } from "./reducers/user/insurance";

export const store = configureStore({
  reducer: {
    User,
    Insurance,
  },
  devTools: process.env.NODE_ENV !== "production",
});
