import {
  getRandomCharacter,
  getRandomCharacterList,
} from "../../../factories/characterFactory";
import {
  fourCharactersState,
  initialCharacterState,
} from "../../../mocks/states/characterState";
import {
  characterReducer,
  deleteCharacterActionCreator,
  getAllCharactersActionCreator,
  getCharacterByIdActionCreator,
} from "./characterSlice";
import { Character, CharacterState } from "./reducer/types";

describe("Given a characterReducer", () => {
  describe("And it's invoked", () => {
    describe("When it receives an unknow action with the initial state", () => {
      test("Then it should return the same state", () => {
        const unknownAction = {
          type: "unknown",
        };

        const newCharacterState = characterReducer(
          initialCharacterState,
          unknownAction
        );

        expect(newCharacterState).toStrictEqual(initialCharacterState);
      });
    });
  });

  describe("When its reducer getAllCharacters is invoked with a payload of 2 characters and a initial state", () => {
    test("Then it should return a new staute with the 2 characters", () => {
      const newCharacters = getRandomCharacterList(2);

      const newState = characterReducer(
        initialCharacterState,
        getAllCharactersActionCreator(newCharacters)
      );

      expect(newState).toStrictEqual({
        characters: newCharacters,
        currentCharacter: {},
      });
    });
  });

  describe("When its reducer deleteCharacter is invoked with a payload of 1 character id and the current state", () => {
    test("Then it should return a new statue without the character in the payload", () => {
      const currentState = fourCharactersState;
      const expectedState = {
        ...fourCharactersState,
        characters: fourCharactersState.characters.slice(1, 4),
      };

      const newState = characterReducer(
        currentState,
        deleteCharacterActionCreator(currentState.characters[0].id)
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When its reducer getCharacterById is invoked with a payload with a character and the current state", () => {
    test("Then it should return a state with the same character", () => {
      const newCharacter = getRandomCharacter();

      const expectedState: CharacterState = {
        characters: [] as Character[],
        currentCharacter: newCharacter,
      };

      const newState = characterReducer(
        initialCharacterState,
        getCharacterByIdActionCreator(newCharacter)
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
