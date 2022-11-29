import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProvider";
import ProtectedRoute from "./ProtectedRoute";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Given a ProtectionRoute component", () => {
  describe("When it's render with a span with Home as children and isLogged true", () => {
    test("Then it should show a span with Home as text", () => {
      const expectedText = "Home";

      renderWithProviders(
        <ProtectedRoute children={<p>{expectedText}</p>} isLogged={true} />
      );

      const expectedSpan = screen.getByText(expectedText);

      expect(expectedSpan).toBeInTheDocument();
    });
  });

  describe("When it's render with a span with Home as children and isLogged false", () => {
    test("Then it should show a span with Home as text", () => {
      const expectedText = "Home";

      renderWithProviders(
        <ProtectedRoute children={<p>{expectedText}</p>} isLogged={false} />
      );

      expect(mockedUseNavigate).toHaveBeenCalledWith("/login");
    });
  });
});
