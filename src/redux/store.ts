import { configureStore } from "@reduxjs/toolkit";
import { User } from "@/redux/reducers/user/user";

export const store = configureStore({
  reducer: {
    User,
  },
  devTools: process.env.NODE_ENV !== "production",
});
