import { UserModel } from "../models/userModel";

export const userInitialState: UserModel = {
  allUsers: [],
  currentUser: undefined,
  showForm: false,
  loading: false,
  stateUser: false,
};
