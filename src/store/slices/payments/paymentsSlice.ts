import { createSlice } from "@reduxjs/toolkit";
import { paymentInitialState } from "../../state/paymentInitialState";

export const paymentsSlice = createSlice({
  name: "payment",
  initialState: paymentInitialState,
  reducers: {
    setLoadingPayment: (state, action) => {
      state.loadingPayment = action.payload;
    },
  },
});

export const { setLoadingPayment } = paymentsSlice.actions;

export default paymentsSlice.reducer;
