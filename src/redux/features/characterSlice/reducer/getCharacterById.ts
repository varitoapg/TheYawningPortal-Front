import { PayloadAction } from "@reduxjs/toolkit";
import { CharacterForm, CharacterState } from "./types";

const getCharacterById = (
  currentState: CharacterState,
  action: PayloadAction<CharacterForm>
) => ({
  ...currentState,
  currentCharacter: action.payload,
});

export default getCharacterById;
