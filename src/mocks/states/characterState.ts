import {
  Character,
  CharacterState,
} from "../../redux/features/characterSlice/reducer/types";

export const initialCharacterState: CharacterState = {
  characters: [] as Character[],
};
