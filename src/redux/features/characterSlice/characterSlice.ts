import { createSlice } from "@reduxjs/toolkit";
import { CharacterState } from "./reducer/types";

const initialCharacterState: CharacterState = {
  characters: [],
};
const charactersSlice = createSlice({
  name: "characters",
  initialState: initialCharacterState,
  reducers: {},
});

export const characterReducer = charactersSlice.reducer;
