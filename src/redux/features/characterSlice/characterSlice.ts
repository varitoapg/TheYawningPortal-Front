import { createSlice } from "@reduxjs/toolkit";
import { initialCharacterState } from "../../../mocks/states/characterState";
import deleteCharacter from "./reducer/deleteceCharacter";
import getAllCharacters from "./reducer/getAllCharacters";

const charactersSlice = createSlice({
  name: "characters",
  initialState: initialCharacterState,
  reducers: {
    getAllCharacters,
    deleteCharacter,
  },
});

export const {
  getAllCharacters: getAllCharactersActionCreator,
  deleteCharacter: deleteCharacterActionCreator,
} = charactersSlice.actions;

export const characterReducer = charactersSlice.reducer;
