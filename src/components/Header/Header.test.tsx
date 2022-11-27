import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProvider";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with 'The Yawning portal' level 1", () => {
      const expectedTitle = "The Yawning Portal";

      renderWithProviders(<Header />);

      const expectedHeader = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
