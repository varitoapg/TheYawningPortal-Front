import { screen } from "@testing-library/react";
import { fourCharactersState } from "../../mocks/states/characterState";
import { mockUiInitialState } from "../../mocks/states/uiState";
import { mockUserLogged } from "../../mocks/states/userState";

import renderWithProviders from "../../testUtils/renderWithProvider";
import EditPage from "./EditPage";

describe("Given a EditPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with 'armor class', an input text with 'name:' and a spinbutton with 'charisma'", () => {
      const headingText = "armor class";
      const nameText = "name:";
      const charismaScore = "charisma";

      renderWithProviders(<EditPage />, {
        preloadedState: {
          ui: mockUiInitialState,
          user: mockUserLogged,
          characters: fourCharactersState,
        },
      });

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
      });
      const expectedName = screen.getByRole("textbox", {
        name: nameText,
      });
      const expectedScoreCharisma = screen.getByRole("spinbutton", {
        name: charismaScore,
      });

      expect(expectedHeading).toBeInTheDocument();
      expect(expectedName).toBeInTheDocument();
      expect(expectedScoreCharisma).toBeInTheDocument();
    });
  });
});
