import { createSlice } from "@reduxjs/toolkit";

export const isMenuOpenSlice = createSlice({
  name: "isMenuOpen",
  initialState: {
    isMenuOpen: false
  },
  reducers: {
    setIsMenuOpen: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
  },
});

export const { setIsMenuOpen } = isMenuOpenSlice.actions;
export const isMenuOpenSelector = (state) => state.isMenuOpen.isMenuOpen;

export default isMenuOpenSlice.reducer;
