import {
  getRandomCharacter,
  getRandomCharacterList,
} from "../../factories/characterFactory";
import {
  Character,
  CharacterForm,
  CharacterState,
} from "../../redux/features/characterSlice/reducer/types";

export const mockInitialCharacterState: CharacterState = {
  allCharacters: [] as Character[],
  currentCharacter: {} as CharacterForm,
  total: 0,
};

export const fourCharactersState: CharacterState = {
  allCharacters: getRandomCharacterList(4),
  currentCharacter: getRandomCharacter(),
  total: 4,
};
