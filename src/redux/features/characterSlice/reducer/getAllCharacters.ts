import { PayloadAction } from "@reduxjs/toolkit";
import { CharacterResponse, CharacterState } from "./types";

const getAllCharacters = (
  currentState: CharacterState,
  action: PayloadAction<CharacterResponse>
) => ({
  ...currentState,
  allCharacters: [...action.payload.allCharacters].filter(
    (character, index, self) =>
      self.findIndex((characterIndex) => {
        return characterIndex.id === character.id;
      }) === index
  ),
  total: action.payload.total,
});

export default getAllCharacters;
