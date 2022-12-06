import {
  getRandomCharacter,
  getRandomCharacterList,
} from "../../../factories/characterFactory";
import {
  fourCharactersState,
  mockInitialCharacterState,
} from "../../../mocks/states/characterState";
import {
  characterReducer,
  deleteCharacterActionCreator,
  getAllCharactersActionCreator,
  getCharacterByIdActionCreator,
  getMoreCharactersActionCreator,
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
          mockInitialCharacterState,
          unknownAction
        );

        expect(newCharacterState).toStrictEqual(mockInitialCharacterState);
      });
    });
  });

  describe("When its reducer getAllCharacters is invoked with a payload of 2 characters and a initial state", () => {
    test("Then it should return a new staute with the 2 characters", () => {
      const newCharacters = getRandomCharacterList(2);

      const newState = characterReducer(
        mockInitialCharacterState,
        getAllCharactersActionCreator({
          allCharacters: newCharacters,
          total: 2,
        })
      );

      expect(newState).toStrictEqual({
        allCharacters: newCharacters,
        currentCharacter: {},
        total: 2,
      });
    });
  });

  describe("When its reducer deleteCharacter is invoked with a payload of 1 character id and the current state", () => {
    test("Then it should return a new statue without the character in the payload", () => {
      const currentState = fourCharactersState;
      const expectedState = {
        ...fourCharactersState,
        allCharacters: fourCharactersState.allCharacters.slice(1, 4),
      };

      const newState = characterReducer(
        currentState,
        deleteCharacterActionCreator(currentState.allCharacters[0].id)
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When its reducer getCharacterById is invoked with a payload with a character and the current state", () => {
    test("Then it should return a state with the same character", () => {
      const newCharacter = getRandomCharacter();

      const expectedState: CharacterState = {
        allCharacters: [] as Character[],
        currentCharacter: newCharacter,
        total: 0,
      };

      const newState = characterReducer(
        mockInitialCharacterState,
        getCharacterByIdActionCreator(newCharacter)
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When its reducer getMoreCharacters is invoked with a payload of 2 charaters and the current state", () => {
    test("Then it should return a state with old array of characters and the new ones", () => {
      const newCharacters = getRandomCharacterList(2);
      const currentState = fourCharactersState;

      const expectedState: CharacterState = {
        ...fourCharactersState,
        allCharacters: [...fourCharactersState.allCharacters, ...newCharacters],
      };

      const newState = characterReducer(
        currentState,
        getMoreCharactersActionCreator({
          allCharacters: newCharacters,
          total: 4,
        })
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
