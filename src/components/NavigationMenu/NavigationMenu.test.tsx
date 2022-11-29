import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../testUtils/renderWithProvider";
import NavigationMenu from "./NavigationMenu";

describe("Given a NavigationMenu component", () => {
  const expectedTexts = ["test1", "test2", "Logout"];
  const expectedPaths = ["/test1", "/test2", "logout"];

  describe("When it's rendered with test1, test2 and Logout as text and /test1, /test2 and /logout as paths", () => {
    test("Then it should show a button with aria label 'Navigation menu' and 2 links with 'Go to test1' and 'Go to test2' and a button with 'Log out' as label text", () => {
      const labelTextButtonLogout = "Log out";

      renderWithProviders(
        <NavigationMenu paths={expectedPaths} texts={expectedTexts} />
      );

      const expectedFirstLink = screen.queryByLabelText(
        `Go to ${expectedTexts[0]}`
      );
      const expectedSecondLink = screen.queryByLabelText(
        `Go to ${expectedTexts[1]}`
      );
      const expectedButton = screen.queryByLabelText("Navigation menu");
      const expecteButtonLogout = screen.getByRole("button", {
        name: labelTextButtonLogout,
      });

      expect(expectedFirstLink).toBeInTheDocument();
      expect(expectedSecondLink).toBeInTheDocument();
      expect(expectedButton).toBeInTheDocument();
      expect(expecteButtonLogout).toBeInTheDocument();
    });
  });

  describe("When it's rendered and button is clicked", () => {
    test("Then it should show an list with classname hidden before click and show after click", async () => {
      renderWithProviders(
        <NavigationMenu paths={expectedPaths} texts={expectedTexts} />
      );

      const expectedButton = screen.queryByLabelText("Navigation menu");
      const expectedList = screen.queryByRole("list");

      expect(expectedList).toHaveClass("hidden");

      await userEvent.click(expectedButton!);

      const expectedListBeforeClick = screen.queryByRole("list");

      expect(expectedListBeforeClick).toHaveClass("show");
    });
  });
});
