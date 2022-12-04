import { renderHook } from "@testing-library/react";
import { getRandomCharacter } from "../../factories/characterFactory";
import mockInitialStore from "../../mocks/store/mockInitialStore";
import { testListCharacters } from "../../mocks/testCharacter";
import {
  deleteCharacterActionCreator,
  getAllCharactersActionCreator,
} from "../../redux/features/characterSlice/characterSlice";
import { CharacterForm } from "../../redux/features/characterSlice/reducer/types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import ProviderWrapper from "../../testUtils/ProviderWrapper";
import useCharacter from "./useCharacter";

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Given the useCharacter custom hook", () => {
  describe("And invokes its function getUserCharacters", () => {
    describe("When it's invoked and there is no errors", () => {
      test("Then it should return an array of characters", async () => {
        const { result } = renderHook(() => useCharacter(), {
          wrapper: ProviderWrapper,
        });

        await result.current.getUserCharacters();

        expect(dispatchSpy).toHaveBeenCalledWith(
          getAllCharactersActionCreator(testListCharacters)
        );
      });
    });

    describe("When axios rejects an error", () => {
      test("Then dispatch should be called with show and hide LoadingActionCreator and showModalActionCreator with error true and 'Something goes wrong. Try again'", async () => {
        const { result } = renderHook(() => useCharacter(), {
          wrapper: ProviderWrapper,
        });

        await result.current.getUserCharacters();

        expect(dispatchSpy).toHaveBeenNthCalledWith(
          1,
          showLoadingActionCreator()
        );
        expect(dispatchSpy).toHaveBeenNthCalledWith(
          2,
          hideLoadingActionCreator()
        );
        expect(dispatchSpy).toHaveBeenNthCalledWith(
          3,
          showModalActionCreator({
            isError: true,
            text: "Something goes wrong. Try again",
          })
        );
      });
    });
  });

  describe("And invokes its function deleteCharacter", () => {
    describe("When it's invoked with a character id that it is in user characters array", () => {
      test("Then dispatch should be called with show and hide LoadingActionCreator and showModalActionCreator with error true and 'Something goes wrong. Try again'", async () => {
        const { id: idCharacter } = testListCharacters[0];
        const { result } = renderHook(() => useCharacter(), {
          wrapper: ProviderWrapper,
        });

        await result.current.deleteCharacter(idCharacter);

        expect(dispatchSpy).toHaveBeenCalledWith(
          deleteCharacterActionCreator(idCharacter)
        );
      });
    });

    describe("When it's invoked an axios rejects an error", () => {
      test("Then it should call dispatch deleteCharacterActionCreator", async () => {
        const { id: idCharacter } = testListCharacters[0];
        const { result } = renderHook(() => useCharacter(), {
          wrapper: ProviderWrapper,
        });

        await result.current.deleteCharacter(idCharacter);

        expect(dispatchSpy).toHaveBeenNthCalledWith(
          1,
          showLoadingActionCreator()
        );
        expect(dispatchSpy).toHaveBeenNthCalledWith(
          2,
          hideLoadingActionCreator()
        );
        expect(dispatchSpy).toHaveBeenNthCalledWith(
          3,
          showModalActionCreator({
            isError: true,
            text: "Fatal error",
          })
        );
      });
    });
  });

  describe("And invokes its function createCharacter", () => {
    const character = getRandomCharacter();
    const characterFormData: CharacterForm = {
      background: character.background,
      characterClass: character.characterClass,
      details: character.details,
      image: character.image,
      name: character.name,
      race: character.race,
      speed: character.speed,
      strength: character.strength,
      constitution: character.constitution,
      dexterity: character.dexterity,
      intelligence: character.intelligence,
      wisdom: character.wisdom,
      charisma: character.charisma,
    };

    describe("When it's invoked with a character data correctly", () => {
      test("Then it should calls navigate with '/home'", async () => {
        const { result } = renderHook(() => useCharacter(), {
          wrapper: ProviderWrapper,
        });

        await result.current.createCharacter(characterFormData);

        expect(mockedUseNavigate).toHaveBeenCalledWith("/home");
      });
    });

    describe("When it's invoked an axios rejects an error", () => {
      test("Then it should call dispatch with showLoadingActionCreator, then hideLoadingActionCreator and finally showModalActionCreator", async () => {
        const { result } = renderHook(() => useCharacter(), {
          wrapper: ProviderWrapper,
        });

        await result.current.createCharacter(characterFormData);

        expect(dispatchSpy).toHaveBeenNthCalledWith(
          1,
          showLoadingActionCreator()
        );
        expect(dispatchSpy).toHaveBeenNthCalledWith(
          2,
          hideLoadingActionCreator()
        );
        expect(dispatchSpy).toHaveBeenNthCalledWith(
          3,
          showModalActionCreator({
            isError: true,
            text: "Character cannot be created!",
          })
        );
      });
    });
  });
});
