import { createSlice } from "@reduxjs/toolkit";
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
  reducers: {},
});

export const userReducer = userSlice.reducer;
