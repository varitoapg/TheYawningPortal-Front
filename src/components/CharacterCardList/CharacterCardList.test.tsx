import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  fourCharactersState,
  initialCharacterState,
} from "../../mocks/states/characterState";
import { mockUiInitialState } from "../../mocks/states/uiState";
import { mockUserLogged } from "../../mocks/states/userState";
import renderWithProviders from "../../testUtils/renderWithProvider";
import CharacterCardList from "./CharacterCardList";

const mockgetCharacters = jest.fn();

jest.mock("../../hooks/useCharacter/useCharacter.ts", () => {
  return () => ({
    getUserCharacters: mockgetCharacters,
  });
});

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
          characters: initialCharacterState,
        },
      });

      const expectedHeading = screen.queryByRole("heading", {
        name: expectedText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
