import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import usersSlice from "./slices/users/usersSlice";
import loandsSlice from "./slices/loands/loandsSlice";
import paymentsSlice from "./slices/payments/paymentsSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    loand: loandsSlice,
    payment: paymentsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
