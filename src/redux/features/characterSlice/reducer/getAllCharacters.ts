import { PayloadAction } from "@reduxjs/toolkit";
import { CharacterResponse, CharacterState } from "./types";

const getAllCharacters = (
  currentState: CharacterState,
  action: PayloadAction<CharacterResponse>
) => ({
  ...currentState,
  allCharacters: [...action.payload.allCharacters],
  total: action.payload.total,
});

export default getAllCharacters;
