import { getRandomCharacterList } from "../../factories/characterFactory";
import {
  Character,
  CharacterState,
} from "../../redux/features/characterSlice/reducer/types";

export const initialCharacterState: CharacterState = {
  characters: [] as Character[],
};

export const fourCharactersState: CharacterState = {
  characters: getRandomCharacterList(4),
};
