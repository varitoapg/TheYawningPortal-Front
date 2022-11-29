import { renderHook } from "@testing-library/react";
import mockInitialStore from "../../mocks/store/mockInitialStore";
import { testListCharacters } from "../../mocks/testCharacter";
import { getAllCharactersActionCreator } from "../../redux/features/characterSlice/characterSlice";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import ProviderWrapper from "../../testUtils/ProviderWrapper";
import useCharacter from "./useCharacter";

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

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
});
