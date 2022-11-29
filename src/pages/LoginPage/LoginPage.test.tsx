import { screen } from "@testing-library/react";
import { store } from "../../redux/store";
import renderWithProviders from "../../testUtils/renderWithProvider";
import LoginPage from "./LoginPage";

describe("Given the LoginPage page", () => {
  const expectedUsername = "Username";
  const expectedPassword = "Password";
  const expectedButtonText = "Log in";
  const expectedLinkToRegister = "Go to register";
  const expectedLinkToLogin = "Go to login";

  describe("When it's rendered", () => {
    test.only("Then it should return 2 inputs text element 'Username' and 'Email', a password input 'Password', 1 button 'Log in', and a link 'Register'", () => {
      renderWithProviders(<LoginPage />, { store });

      const expectedInputUser = screen.getByRole("textbox", {
        name: expectedUsername,
      });
      const passwordInput = screen.getByLabelText(expectedPassword);
      const buttonLogin = screen.getByRole("button", {
        name: expectedButtonText,
      });
      const linkToRegister = screen.getByRole("link", {
        name: expectedLinkToRegister,
      });
      const linkToLogin = screen.getByRole("link", {
        name: expectedLinkToLogin,
      });

      expect(expectedInputUser).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(buttonLogin).toBeInTheDocument();
      expect(linkToRegister).toBeInTheDocument();
      expect(linkToLogin).toBeInTheDocument();
    });
  });
});
