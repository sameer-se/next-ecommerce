import { configureStore } from "@reduxjs/toolkit";
import UserSlice, { userSlice } from "./Slice/UserSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
