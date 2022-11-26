import { createSlice } from "@reduxjs/toolkit";
import userLogin from "./reducers/userLogin";
import userLogout from "./reducers/userLogout";
import { UserState } from "./types";

export const userInitialState: UserState = {
  id: "",
  isLogged: false,
  token: "",
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    userLogin,
    userLogout,
  },
});

export const userReducer = userSlice.reducer;

export const {
  userLogin: userLoginActionCreator,
  userLogout: userLogoutActionCreator,
} = userSlice.actions;
