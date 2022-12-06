import { PayloadAction } from "@reduxjs/toolkit";
import { CharacterState } from "./types";

const deleteCharacter = (
  currentState: CharacterState,
  action: PayloadAction<string>
) => {
  return {
    ...currentState,
    allCharacters: currentState.allCharacters.filter(
      (character) => character.id !== action.payload
    ),
  };
};

export default deleteCharacter;
