import { PayloadAction } from "@reduxjs/toolkit";
import { Character, CharacterState } from "./types";

const getMoreCharacters = (
  currentState: CharacterState,
  action: PayloadAction<Character[]>
) => ({
  ...currentState,
  characters: [...currentState.characters, ...action.payload],
});

export default getMoreCharacters;
