import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/UserSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});
