import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProvider";
import HomePage from "./HomePage";

describe("Given a HomePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with 'The Yawning portal' level 1 and a span with 'Here you have your pint!'", () => {
      const expectedTitle = "The Yawning Portal";
      const expectedText = "Here you have your pint!";

      renderWithProviders(<HomePage />);

      const expectedHeader = screen.getByRole("heading", {
        name: expectedTitle,
      });
      const expectedSpan = screen.getByText(expectedText);

      expect(expectedHeader).toBeInTheDocument();
      expect(expectedSpan).toBeInTheDocument();
    });
  });
});
