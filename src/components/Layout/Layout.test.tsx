import { screen, waitFor } from "@testing-library/react";
import { fourCharactersState } from "../../mocks/states/characterState";
import { mockUiInitialState } from "../../mocks/states/uiState";
import { mockUserLogged } from "../../mocks/states/userState";
import renderWithProviders from "../../testUtils/renderWithProvider";
import Layout from "./Layout";
const mockgetCharacters = jest.fn();
jest.mock("../../hooks/useCharacter/useCharacter", () => {
  return () => ({
    getUserCharacters: mockgetCharacters,
  });
});

describe("Given the Layout component", () => {
  describe("When it's render", () => {
    test("Then it should show App Component with a heading with 'The Yawning Portal' and a button with 'Log in'", () => {
      const buttonText = "Log in";
      const headerText = "The Yawning Portal";
      renderWithProviders(<Layout />, { initialEntries: ["/"] });

      const expectedHeading = screen.getByRole("heading", {
        name: headerText,
      });
      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedHeading).toBeInTheDocument();
      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When it's render with an initialEntries /wrongPage", () => {
    test("Then it should show NotFound Component with a text 'Please, try again. If the issue keeps happening, contact'", async () => {
      const notFoundText =
        "Please, try again. If the issue keeps happening, contact";
      renderWithProviders(<Layout />, { initialEntries: ["/wrongPage"] });

      await waitFor(() => {
        const expectedNotFoundText = screen.getByText(notFoundText);

        expect(expectedNotFoundText).toBeInTheDocument();
      });
    });
  });

  describe("When it's render with an initialEntries /register", () => {
    test("Then it should show a button wiht 'Register'", async () => {
      const textButton = "Register";
      renderWithProviders(<Layout />, { initialEntries: ["/register"] });

      await waitFor(() => {
        const expectedHeading = screen.getByRole("button", {
          name: textButton,
        });

        expect(expectedHeading).toBeInTheDocument();
      });
    });

    describe("When it's render with an initialEntries /home and a preloaded state with user logged and 4 characters", () => {
      test("Then it should show a button wiht 'Register'", async () => {
        renderWithProviders(<Layout />, {
          initialEntries: ["/home"],
          preloadedState: {
            characters: fourCharactersState,
            ui: mockUiInitialState,
            user: mockUserLogged,
          },
        });

        await waitFor(() => {
          expect(mockgetCharacters).toHaveBeenCalled();
        });
      });
    });
  });
});
