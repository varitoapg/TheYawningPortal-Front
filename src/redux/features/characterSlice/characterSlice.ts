import { createSlice } from "@reduxjs/toolkit";
import { initialCharacterState } from "../../../mocks/states/characterState";
import deleteCharacter from "./reducer/deleteceCharacter";
import getAllCharacters from "./reducer/getAllCharacters";
import getCharacterById from "./reducer/getCharacterById";
import getMoreCharacters from "./reducer/getMoreCharacters";

const charactersSlice = createSlice({
  name: "characters",
  initialState: initialCharacterState,
  reducers: {
    getAllCharacters,
    deleteCharacter,
    getCharacterById,
    getMoreCharacters,
  },
});

export const {
  getAllCharacters: getAllCharactersActionCreator,
  deleteCharacter: deleteCharacterActionCreator,
  getCharacterById: getCharacterByIdActionCreator,
  getMoreCharacters: getMoreCharactersActionCreator,
} = charactersSlice.actions;

export const characterReducer = charactersSlice.reducer;
