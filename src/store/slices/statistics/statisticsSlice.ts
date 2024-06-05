import { createSlice } from "@reduxjs/toolkit";
import { statisticsInitialState } from "../../state/statisticsInitialState";

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState: statisticsInitialState,
  reducers: {
    setFundsRaised: (state, action) => {
      state.fundsRaised = action.payload;
    },
    setTotalFundsRaised: (state, action) => {
      state.totalFundsRaised = action.payload;
    },
    setInterestRate: (state, action) => {
      state.interestRate = action.payload;
    },
    setTotalInterestRate: (state, action) => {
      state.totalInterestRate = action.payload;
    },
    setTotalLoanedMoney: (state, action) => {
      state.totalLoanedMoney = action.payload;
    },
    setRaisedMoney: (state, action) => {
      state.raisedMoney = action.payload;
    },
    setFineType: (state, action) => {
      state.fineType = action.payload;
    },
  },
});

export const {
  setFundsRaised,
  setTotalFundsRaised,
  setInterestRate,
  setTotalInterestRate,
  setTotalLoanedMoney,
  setRaisedMoney,
  setFineType,
} = statisticsSlice.actions;

export default statisticsSlice.reducer;
