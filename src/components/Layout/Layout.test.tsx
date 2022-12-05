import { screen, waitFor } from "@testing-library/react";
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
  });
});
