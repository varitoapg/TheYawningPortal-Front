import { PayloadAction } from "@reduxjs/toolkit";
import { CharacterResponse, CharacterState } from "./types";

const getMoreCharacters = (
  currentState: CharacterState,
  action: PayloadAction<CharacterResponse>
) => ({
  ...currentState,
  allCharacters: [
    ...currentState.allCharacters,
    ...action.payload.allCharacters,
  ],
  total: action.payload.total,
});

export default getMoreCharacters;
