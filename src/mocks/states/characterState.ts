import {
  getRandomCharacter,
  getRandomCharacterList,
} from "../../factories/characterFactory";
import {
  Character,
  CharacterForm,
  CharacterState,
} from "../../redux/features/characterSlice/reducer/types";

export const initialCharacterState: CharacterState = {
  characters: [] as Character[],
  currentCharacter: {} as CharacterForm,
};

export const fourCharactersState: CharacterState = {
  characters: getRandomCharacterList(4),
  currentCharacter: getRandomCharacter(),
};
