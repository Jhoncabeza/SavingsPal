import { createSlice } from "@reduxjs/toolkit";
import { LoandInitialState } from "../../state/loandInitialState";

export const loandsSlice = createSlice({
  name: "loand",
  initialState: LoandInitialState,
  reducers: {
    setAllLoands: (state, action) => {
      state.allLoands = action.payload;
    },
    setCurrentLoand: (state, action) => {
      state.currentLoand = action.payload;
    },
    setShowFormLoand: (state, action) => {
      state.showFormLoand = action.payload;
    },
    setLoadingLoand: (state, action) => {
      state.loadingLoand = action.payload;
    },
    setStateLoand: (state, action) => {
      state.stateLoand = action.payload;
    },
  },
});

export const {
  setAllLoands,
  setCurrentLoand,
  setShowFormLoand,
  setLoadingLoand,
  setStateLoand,
} = loandsSlice.actions;

export default loandsSlice.reducer;
