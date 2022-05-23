import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import productSlice from "./product-slice";
import counterSlice from "./counter-slice";

// Put any other imports below so that CSS from your
// components takes precedence over default styles.'

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    product: productSlice.reducer,
  },
});
export default store;
