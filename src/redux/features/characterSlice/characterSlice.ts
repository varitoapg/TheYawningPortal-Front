import { createSlice } from "@reduxjs/toolkit";
import { initialCharacterState } from "../../../mocks/states/characterState";
import deleteCharacter from "./reducer/deleteceCharacter";
import getAllCharacters from "./reducer/getAllCharacters";
import getCharacterById from "./reducer/getCharacterById";

const charactersSlice = createSlice({
  name: "characters",
  initialState: initialCharacterState,
  reducers: {
    getAllCharacters,
    deleteCharacter,
    getCharacterById,
  },
});

export const {
  getAllCharacters: getAllCharactersActionCreator,
  deleteCharacter: deleteCharacterActionCreator,
  getCharacterById: getCharacterByIdActionCreator,
} = charactersSlice.actions;

export const characterReducer = charactersSlice.reducer;
