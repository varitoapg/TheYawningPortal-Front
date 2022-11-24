import { screen } from "@testing-library/react";
import { store } from "../../redux/store";
import renderWithProviders from "../../testUtils/renderWithProvider";
import RegisterPage from "./RegisterPage";

describe("Given the RegisterPage page", () => {
  const expectedUsername = "Username";
  const expectedPassword = "Password";
  const expectedEmail = "Email";
  const expectedButtonText = "Register";
  const expectedLinkText = "Log in";

  describe("When it's rendered", () => {
    test("Then it should return 2 inputs text element 'Username' and 'Email', a password input 'Password', 1 button 'Register', and a link 'Log in'", () => {
      renderWithProviders(<RegisterPage />, { store });

      const expectedInputUser = screen.getByRole("textbox", {
        name: expectedUsername,
      });
      const passwordInput = screen.getByLabelText(expectedPassword);
      const expectedInputEmail = screen.getByRole("textbox", {
        name: expectedEmail,
      });
      const buttonRegister = screen.getByRole("button", {
        name: expectedButtonText,
      });
      const linkLogin = screen.getByRole("link", { name: expectedLinkText });

      expect(expectedInputUser).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(expectedInputEmail).toBeInTheDocument();
      expect(buttonRegister).toBeInTheDocument();
      expect(linkLogin).toBeInTheDocument();
    });
  });
});
