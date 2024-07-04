import { configureStore } from "@reduxjs/toolkit";

import sliderReducer from "./slices/sliderSlice";
import productsReducer from "./slices/productsSlice";

const store = configureStore({
    reducer: {
        slider: sliderReducer,
        products: productsReducer,
    }
});

export default store;