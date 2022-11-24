import { PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../types";

const userLogin = (
  currentUserState: UserState,
  action: PayloadAction<User>
) => ({
  ...action.payload,
  isLogged: true,
});

export default userLogin;
