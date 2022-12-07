import { screen } from "@testing-library/react";
import {
  fourCharactersState,
  mockInitialCharacterState,
} from "../../mocks/states/characterState";
import { mockUiInitialState } from "../../mocks/states/uiState";
import { mockUserLogged } from "../../mocks/states/userState";
import renderWithProviders from "../../testUtils/renderWithProvider";
import CharacterCardList from "./CharacterCardList";

describe("Given a CharacterCardList component", () => {
  describe("When it's rendered with 4 characters in the store", () => {
    test("Then it should show 4 CharacterCards", () => {
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
    });
  });

  describe("When it's rendered without characters in the store", () => {
    test("Then it should show a heading with 'You still don't have characters.'", () => {
      const expectedHeadingText = "You still don't have characters.";

      renderWithProviders(<CharacterCardList />, {
        preloadedState: {
          ui: mockUiInitialState,
          user: mockUserLogged,
          characters: mockInitialCharacterState,
        },
      });

      const expectedHeading = screen.queryByRole("heading", {
        name: expectedHeadingText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
