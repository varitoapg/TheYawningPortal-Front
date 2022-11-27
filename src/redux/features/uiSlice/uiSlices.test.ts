import {
  mockUiInitialState,
  mockUiLoadingOpenState,
  mockUiModalOpenState,
} from "../../../mocks/states/uiState";
import { ShowModalActionPayload, UiState } from "./types";
import {
  hideLoadingActionCreator,
  hideModalActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
  uiReducer,
} from "./uiSlice";

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

  describe("When its reducer showModal is invoked with a payload with isError true and text 'Test error'", () => {
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

  describe("When its reducer hideModal is invoked when there is a state with isOpen is true", () => {
    test("Then it should return a new state with isOpen false", () => {
      const expectedUiState: UiState = {
        ...mockUiInitialState,
        modal: {
          isError: false,
          text: "",
          isOpen: false,
        },
      };

      const newUiState = uiReducer(
        mockUiModalOpenState,
        hideModalActionCreator()
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When its reducer showLoading is invoked with a initial state with isLoading false", () => {
    test("Then it should return a copy of the state with isLoading true", () => {
      const expectedUiState: UiState = {
        isLoading: true,
        modal: {
          isError: false,
          isOpen: false,
          text: "",
        },
      };

      const newState = uiReducer(
        mockUiInitialState,
        showLoadingActionCreator()
      );

      expect(expectedUiState).toStrictEqual(newState);
    });
  });

  describe("When its reducer hideLoading is invoked with a initial state with isLoading true", () => {
    test("Then it should return a copy of the state with isLoading false", () => {
      const expectedUiState: UiState = {
        isLoading: false,
        modal: {
          isError: false,
          isOpen: false,
          text: "",
        },
      };

      const newState = uiReducer(
        mockUiLoadingOpenState,
        hideLoadingActionCreator()
      );

      expect(expectedUiState).toStrictEqual(newState);
    });
  });
});
