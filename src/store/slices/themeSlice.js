import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: JSON.parse(sessionStorage.getItem("darkMode")) || false,
  },
  reducers: {
    toggleTheme(state, action) {
      state.darkMode = !state.darkMode;
      const saveState = JSON.stringify(state.darkMode);
      sessionStorage.setItem("darkMode", saveState);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
