import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProvider";
import Layout from "./Layout";

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
});
