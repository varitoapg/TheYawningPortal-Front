import { getRandomCharacterList } from "../../../factories/characterFactory";
import { initialCharacterState } from "../../../mocks/states/characterState";
import {
  characterReducer,
  getAllCharactersActionCreator,
} from "./characterSlice";

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

      expect(newState).toStrictEqual({ characters: newCharacters });
    });
  });
});
