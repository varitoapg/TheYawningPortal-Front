import { screen } from "@testing-library/react";
import { fourCharactersState } from "../../mocks/states/characterState";
import { mockUiInitialState } from "../../mocks/states/uiState";
import { mockUserLogged } from "../../mocks/states/userState";
import renderWithProviders from "../../testUtils/renderWithProvider";
import HomePage from "./HomePage";

const mockgetCharacters = jest.fn();

jest.mock("../../hooks/useCharacter/useCharacter.ts", () => {
  return () => ({
    getUserCharacters: mockgetCharacters,
  });
});

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
});
