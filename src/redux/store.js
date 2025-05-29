import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/UserSlice";
import CartSlice from "./Slice/CartSlice";
import WishlistSlice from "./Slice/WishlistSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    cart: CartSlice,
    wishlist: WishlistSlice,
  },
});
