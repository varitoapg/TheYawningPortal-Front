import { PayloadAction } from "@reduxjs/toolkit";
import { Character, CharacterState } from "./types";

const getAllCharacters = (
  currentState: CharacterState,
  action: PayloadAction<Character[]>
) => ({
  ...currentState,
  characters: [...action.payload],
});

export default getAllCharacters;
