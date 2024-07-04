import { configureStore, createReducer } from "@reduxjs/toolkit";

import sliderReducer from "./slices/sliderSlice";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        slider: sliderReducer,
        products: productsReducer,
        cart: cartReducer,
    }
});

export default store;