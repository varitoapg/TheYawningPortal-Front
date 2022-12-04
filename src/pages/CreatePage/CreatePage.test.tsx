import { screen } from "@testing-library/react";

import renderWithProviders from "../../testUtils/renderWithProvider";
import CreatePage from "./CreatePage";

describe("Given a CreatePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with 'armor class', an input text with 'name:' and a spinbutton with 'charisma'", () => {
      const headingText = "armor class";
      const nameText = "name:";
      const charismaScore = "charisma";

      renderWithProviders(<CreatePage />);

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
