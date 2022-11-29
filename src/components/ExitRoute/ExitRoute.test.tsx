import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProvider";
import ExitRoute from "./ExitRoute";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Given a ExitRoute component", () => {
  describe("When it's render with a span with Home as children and isLogged false", () => {
    test("Then it should show a span with Home as text", () => {
      const expectedText = "Home";

      renderWithProviders(
        <ExitRoute children={<span>{expectedText}</span>} isLogged={false} />
      );

      const expectedSpan = screen.getByText(expectedText);

      expect(expectedSpan).toBeInTheDocument();
    });
  });

  describe("When it's render with a span with Home as children and isLogged true", () => {
    test("Then it should call navigate with '/home'", () => {
      const expectedText = "Home";

      renderWithProviders(
        <ExitRoute children={<p>{expectedText}</p>} isLogged={true} />
      );

      expect(mockedUseNavigate).toHaveBeenCalledWith("/home");
    });
  });
});
