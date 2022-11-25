import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../testUtils/renderWithProvider";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it's rendered with a text 'Log in' and an action", () => {
    test("Then it should show a button with the text 'Log in' and action should be called", async () => {
      const expectedText = "Log in";
      const buttonAction = jest.fn();

      renderWithProviders(
        <Button children={expectedText} action={buttonAction()} />
      );

      const renderedButton = screen.queryByRole("button", {
        name: expectedText,
      });

      await userEvent.click(renderedButton!);

      expect(renderedButton).toBeInTheDocument();
      expect(buttonAction).toHaveBeenCalled();
    });
  });
});
