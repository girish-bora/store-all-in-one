import { configureStore } from "@reduxjs/toolkit";

import sliderReducer from "./slices/sliderSlice";

const store = configureStore({
    reducer: {
        slider: sliderReducer,
    }
});

export default store;