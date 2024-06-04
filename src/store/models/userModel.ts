import { IUser, IUserFormData } from "../../types/user.interface";

export interface UserModel {
  allUsers: IUser[];
  currentUser: IUserFormData | undefined;
  showForm: boolean;
  loading: boolean;
  stateUser: boolean;
}
