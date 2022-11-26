import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProvider";
import Loading from "./Loading";

describe("Given the Loading Component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an svg with aria label 'Dice 20 faces loading'", () => {
      const expectedAriaLabel = "Dice 20 faces loading";

      renderWithProviders(<Loading />);

      const expectedLoading = screen.getByLabelText(expectedAriaLabel);

      expect(expectedLoading).toBeInTheDocument();
    });
  });
});
