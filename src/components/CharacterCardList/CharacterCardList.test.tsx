import { screen } from "@testing-library/react";
import { fourCharactersState } from "../../mocks/states/characterState";
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
});
