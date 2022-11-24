import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getRandomLoginCredentials } from "../../factories/userFactory";
import { UserLoginCredentials } from "../../hooks/useUser/types";
import renderWithProviders from "../../testUtils/renderWithProvider";
import LoginForm from "./LoginForm";

const mockSubmit = jest.fn();

jest.mock("../../hooks/useUser/useUser.ts", () => {
  return () => ({
    userLogin: mockSubmit,
  });
});

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

  describe("When it's rendered and Log in button it's clicked", () => {
    test("Then the form should be submited", async () => {
      const buttonName = "Log in";

      renderWithProviders(<LoginForm />);

      const buttonCreate = screen.getByRole("button", {
        name: buttonName,
      });

      await userEvent.click(buttonCreate);

      expect(mockSubmit).toHaveBeenCalled();
    });
  });

  describe("When it is rendered and submits username and password", () => {
    test("Then loginUser should be called with the input user information", async () => {
      const userInput: UserLoginCredentials = getRandomLoginCredentials();

      renderWithProviders(<LoginForm />);

      const usernameInput = screen.queryByRole("textbox", {
        name: "Username",
      });
      const passwordInput = screen.getByLabelText("Password");
      const loginButton = screen.queryByRole("button", {
        name: "Log in",
      });

      await userEvent.type(usernameInput!, userInput.username);
      await userEvent.type(passwordInput!, userInput.password);
      await userEvent.click(loginButton!);

      expect(mockSubmit).toHaveBeenCalledWith(userInput);
    });
  });
});
