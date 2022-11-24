import { createSlice } from "@reduxjs/toolkit";
import userLogin from "./reducers/userLogin";
import { UserState } from "./types";

const userInitialState: UserState = {
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
  },
});

export const userReducer = userSlice.reducer;

export const { userLogin: userLoginActionCreator } = userSlice.actions;
