import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { User } from "@/redux/reducers/user/user";
import { Insurance } from "./reducers/user/insurance";
import { FetchApiService } from "@/services/fetchApis";

const reducers = combineReducers({
  User,
  Insurance,
  [FetchApiService.reducerPath]: FetchApiService.reducer,
});

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(FetchApiService.middleware),
});
