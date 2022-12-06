import { fireEvent, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  fourCharactersState,
  mockInitialCharacterState,
} from "../../mocks/states/characterState";
import { mockUiInitialState } from "../../mocks/states/uiState";
import { mockUserLogged } from "../../mocks/states/userState";
import mockStoreUserLogged from "../../mocks/store/mockStoreUserLogged";
import { filterClassActionCreator } from "../../redux/features/uiSlice/uiSlice";
import renderWithProviders from "../../testUtils/renderWithProvider";
import CharacterCardList from "./CharacterCardList";

const mockgetCharacters = jest.fn();

jest.mock("../../hooks/useCharacter/useCharacter.ts", () => {
  return () => ({
    getUserCharacters: mockgetCharacters,
  });
});
const dispatchSpy = jest.spyOn(mockStoreUserLogged, "dispatch");

describe("Given a CharacterCardList component", () => {
  describe("When it's rendered with 4 characters in the store", () => {
    test("Then it should show 4 CharacterCards and getUserCharacters be called", () => {
      const expectedLenght = 4;

      renderWithProviders(<CharacterCardList />, {
        preloadedState: {
          ui: mockUiInitialState,
          user: mockUserLogged,
          characters: fourCharactersState,
        },
      });

      const expectedCharacters = screen.queryAllByRole("listitem");

      expect(expectedCharacters).toHaveLength(expectedLenght);
      expect(mockgetCharacters).toHaveBeenCalled();
    });
  });

  describe("When it's rendered with 4 characters in the store and clicks Load more character button", () => {
    test("Then it should call dispatch with getUserCharacters", async () => {
      renderWithProviders(<CharacterCardList />, {
        preloadedState: {
          ui: mockUiInitialState,
          user: mockUserLogged,
          characters: fourCharactersState,
        },
      });
      const expectedButton = screen.getByLabelText("Load more characters");

      await userEvent.click(expectedButton!);

      expect(mockgetCharacters).toHaveBeenCalled();
    });
  });

  describe("When it's rendered withot characters in the store", () => {
    test("Then it should show a heading with 'Sorry, you still don't have characters'", () => {
      const expectedText = "Sorry, you still don't have characters";

      renderWithProviders(<CharacterCardList />, {
        preloadedState: {
          ui: mockUiInitialState,
          user: mockUserLogged,
          characters: mockInitialCharacterState,
        },
      });

      const expectedHeading = screen.queryByRole("heading", {
        name: expectedText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });

  describe("When it's rendered with 4 characters in the store and clicks 'sorcerer' in class filter", () => {
    test("Then it should call getUserCharacter", async () => {
      const expectedClass = "sorcerer";
      const classSelect = "class:";

      renderWithProviders(<CharacterCardList />, {
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
});
