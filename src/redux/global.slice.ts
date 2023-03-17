import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GlobalState } from "./global.types";

const initialState: GlobalState = {
  loading: false,
};

const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    setLoading: (state: GlobalState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading } = globalSlice.actions;

export default globalSlice.reducer;
