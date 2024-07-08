import { configureStore, createReducer } from "@reduxjs/toolkit";

import sliderReducer from "./slices/sliderSlice";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
    reducer: {
        slider: sliderReducer,
        products: productsReducer,
        cart: cartReducer,
        user: authReducer,
    }
});

export default store;