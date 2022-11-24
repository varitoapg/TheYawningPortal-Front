import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProvider";
import LoginForm from "./LoginForm";

describe("Given the LoginForm Component", () => {
  describe("When it's rendered", () => {
    test("Then it should return 1 input element 'username', a password input element 'password', 1 button 'Send', 1 anchor", () => {
      const expectedNameInput = "Username";
      const expectedPasswordLabel = "Password";
      const expectedButton = "Log in";
      const expectedLink = "Register";

      renderWithProviders(<LoginForm />);

      const expectedInput = screen.getByRole("textbox", {
        name: expectedNameInput,
      });
      const passwordInput = screen.getByLabelText(expectedPasswordLabel);
      const buttonSend = screen.getByRole("button", { name: expectedButton });
      const registerLink = screen.getByRole("link", { name: expectedLink });

      expect(expectedInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(buttonSend).toBeInTheDocument();
      expect(registerLink).toBeInTheDocument();
    });
  });
});
