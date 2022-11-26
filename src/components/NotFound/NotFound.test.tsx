import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProvider";
import NotFound from "./NotFound";

describe("Given a NotFound component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with 'Page not found' level 2 and a link 'Tavern'", () => {
      const expectedTitle = "Page not found";
      const expectedLink = "Tavern";
      renderWithProviders(<NotFound />);

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
