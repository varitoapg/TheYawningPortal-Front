import { mockUiInitialState } from "../../../mocks/states/uiState";
import { ShowModalActionPayload, UiState } from "./types";
import { showModalActionCreator, uiReducer } from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("And it's invoked", () => {
    describe("When it receives an unknow action with the initial state", () => {
      test("Then it should return the same state", () => {
        const unknownAction = {
          type: "unknown",
        };

        const newUiState = uiReducer(mockUiInitialState, unknownAction);

        expect(newUiState).toStrictEqual(mockUiInitialState);
      });
    });
  });

  describe("When its reducer showLoading is invoked with a payload with isError true and text 'Test error'", () => {
    test("Then it should return a new state with isError true and text 'Test error", () => {
      const expectedUiState: UiState = {
        ...mockUiInitialState,
        modal: {
          isError: true,
          text: "Test error",
          isOpen: true,
        },
      };

      const actionPayload: ShowModalActionPayload = {
        text: "Test error",
        isError: true,
      };

      const newUiState = uiReducer(
        mockUiInitialState,
        showModalActionCreator(actionPayload)
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
