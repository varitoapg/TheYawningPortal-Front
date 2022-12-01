import { PayloadAction } from "@reduxjs/toolkit";
import { CharacterState } from "./types";

const deleteCharacter = (
  currentState: CharacterState,
  action: PayloadAction<string>
) => ({
  ...currentState,
  characters: currentState.characters.filter(
    (character) => character.id !== action.payload
  ),
});

export default deleteCharacter;
