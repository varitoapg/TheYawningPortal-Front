import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fourCharactersState } from "../../mocks/states/characterState";
import { mockUiInitialState } from "../../mocks/states/uiState";
import { mockUserLogged } from "../../mocks/states/userState";
import mockStoreUserLogged from "../../mocks/store/mockStoreUserLogged";
import { filterClassActionCreator } from "../../redux/features/uiSlice/uiSlice";
import renderWithProviders from "../../testUtils/renderWithProvider";
import HomePage from "./HomePage";

const mockgetCharacters = jest.fn();
jest.mock("../../hooks/useCharacter/useCharacter", () => {
  return () => ({
    getUserCharacters: mockgetCharacters,
  });
});

const dispatchSpy = jest.spyOn(mockStoreUserLogged, "dispatch");

describe("Given a HomePage page", () => {
  describe("When it is rendered with 4 characters in store", () => {
    test("Then it should show a heading with 'The Yawning portal' level 1 and getUserCharacters be called", () => {
      const expectedTitle = "The Yawning Portal";

      renderWithProviders(<HomePage />, {
        preloadedState: {
          ui: mockUiInitialState,
          user: mockUserLogged,
          characters: fourCharactersState,
        },
      });

      const expectedHeader = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(expectedHeader).toBeInTheDocument();
      expect(mockgetCharacters).toHaveBeenCalled();
    });
  });

  describe("When it's rendered with 4 characters in the store and clicks Load more character button", () => {
    test("Then it should call getUserCharacters twice", async () => {
      renderWithProviders(<HomePage />);
      const expectedButton = screen.getByLabelText("Load more characters");
      expect(expectedButton).toBeInTheDocument();
      await userEvent.click(expectedButton!);

      expect(mockgetCharacters).toHaveBeenCalledTimes(2);
    });
  });

  describe("When it's rendered with 4 characters in the store and clicks 'sorcerer' in class filter", () => {
    test("Then it should call dispatch with filterClassActionCreator", async () => {
      const expectedClass = "sorcerer";
      const classSelect = "class:";

      renderWithProviders(<HomePage />, {
        store: mockStoreUserLogged,
      });
      const classCharacterSelect = screen.getByRole("combobox", {
        name: classSelect,
      });

      const classCharacterOption = screen.getByRole("option", {
        name: expectedClass,
      });
      await userEvent.selectOptions(classCharacterSelect, classCharacterOption);

      expect(dispatchSpy).toHaveBeenCalledWith(
        filterClassActionCreator(expectedClass)
      );
    });
  });

  describe("When it's rendered with 4 characters in the store and clicks '-- select class --' in class filter", () => {
    test("Then it shouldn't call dispatch with filterClassActionCreator", async () => {
      const expectedClass = "-- select class --";
      const classSelect = "class:";

      renderWithProviders(<HomePage />, {
        store: mockStoreUserLogged,
      });
      const classCharacterSelect = screen.getByRole("combobox", {
        name: classSelect,
      });

      const classCharacterOption = screen.getByRole("option", {
        name: expectedClass,
      });
      await userEvent.selectOptions(classCharacterSelect, classCharacterOption);

      expect(dispatchSpy).not.toHaveBeenCalledWith(
        filterClassActionCreator(expectedClass)
      );
    });
  });
});
