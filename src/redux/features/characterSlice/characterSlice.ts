import { createSlice } from "@reduxjs/toolkit";
import deleteCharacter from "./reducer/deleteceCharacter";
import getAllCharacters from "./reducer/getAllCharacters";
import getCharacterById from "./reducer/getCharacterById";
import getMoreCharacters from "./reducer/getMoreCharacters";
import { Character, CharacterForm, CharacterState } from "./reducer/types";

const initialCharacterState: CharacterState = {
  allCharacters: [] as Character[],
  currentCharacter: {} as CharacterForm,
  total: 0,
};

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
