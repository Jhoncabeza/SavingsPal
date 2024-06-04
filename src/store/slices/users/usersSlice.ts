import { createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "../../state/userInitialState";

export const usersSlice = createSlice({
  name: "users",
  initialState: userInitialState,
  reducers: {
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setShowForm: (state, action) => {
      state.showForm = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setStateUser: (state, action) => {
      state.stateUser = action.payload;
    },
  },
});

export const {
  setAllUsers,
  setCurrentUser,
  setShowForm,
  setLoading,
  setStateUser,
} = usersSlice.actions;

export default usersSlice.reducer;
