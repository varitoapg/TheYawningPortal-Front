import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserRegisterCredentials } from "../../redux/features/userSlice/types";
import renderWithProviders from "../../testUtils/renderWithProvider";
import RegisterForm from "./RegisterForm";

const mockUserRegister = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    userRegister: mockUserRegister,
  });
});

describe("Given the RegisterForm Component", () => {
  const expectedUsername = "Username";
  const expectedPassword = "Password";
  const expectedEmail = "Email";
  const expectedButtonText = "Register";
  const expectedLinkText = "Log in";

  describe("When it's rendered", () => {
    test("Then it should return 2 inputs text element 'Username' and 'Email', a password input 'Password', 1 button 'Register', and a link 'Log in'", () => {
      renderWithProviders(<RegisterForm />);

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

  describe("When it is rendered and the user submits username 'admin' and password 'admin123", () => {
    test("Then userRegister should be called with the details entered", async () => {
      const userInput: UserRegisterCredentials = {
        username: "admin",
        password: "admin123",
        email: "test@email.com",
      };

      renderWithProviders(<RegisterForm />);

      const usernameInput = screen.queryByRole("textbox", {
        name: expectedUsername,
      });
      const passwordInput = screen.getByLabelText(expectedPassword);
      const expectedInputEmail = screen.getByRole("textbox", {
        name: expectedEmail,
      });
      const registerButton = screen.queryByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.type(usernameInput!, userInput.username);
      await userEvent.type(passwordInput, userInput.password);
      await userEvent.type(expectedInputEmail, userInput.email);
      await userEvent.click(registerButton!);

      expect(mockUserRegister).toHaveBeenCalledWith(userInput);
    });
  });
});
