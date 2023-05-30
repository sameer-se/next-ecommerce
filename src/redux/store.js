import { configureStore } from "@reduxjs/toolkit";
import UserSlice, { userSlice } from "./Slice/UserSlice";

export default configureStore({
  reducer: {
    user: userSlice,
  },
});
