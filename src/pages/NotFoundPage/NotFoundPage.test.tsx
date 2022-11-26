import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProvider";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading with 'Page not found' level 2 and a link 'Tavern'", () => {
      const expectedTitle = "Page not found";
      const expectedLink = "Tavern";
      renderWithProviders(<NotFoundPage />);

      const expectedHeader = screen.getByRole("heading", {
        name: expectedTitle,
      });
      const returnLink = screen.getByRole("link", {
        name: expectedLink,
      });

      expect(expectedHeader).toBeInTheDocument();
      expect(returnLink).toBeInTheDocument();
    });
  });
});
