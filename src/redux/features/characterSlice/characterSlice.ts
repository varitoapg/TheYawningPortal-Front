import { createSlice } from "@reduxjs/toolkit";
import { initialCharacterState } from "../../../mocks/states/characterState";
import getAllCharacters from "./reducer/getAllCharacters";

const charactersSlice = createSlice({
  name: "characters",
  initialState: initialCharacterState,
  reducers: {
    getAllCharacters,
  },
});

export const { getAllCharacters: getAllCharactersActionCreator } =
  charactersSlice.actions;

export const characterReducer = charactersSlice.reducer;
