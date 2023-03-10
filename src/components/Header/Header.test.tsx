import { screen } from "@testing-library/react";
import mockStoreUserLogged from "../../mocks/store/mockStoreUserLogged";
import renderWithProviders from "../../testUtils/renderWithProvider";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with 'The Yawning portal' level 1", () => {
      const expectedTitle = "The Yawning Portal";

      renderWithProviders(<Header />);

      const expectedHeader = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(expectedHeader).toBeInTheDocument();
    });
  });

  describe("When it is rendered when the user is logged", () => {
    test("Then it should show a heading with 'The Yawning portal' level 1", () => {
      const expectedTitle = "The Yawning Portal";
      const expectedLinkText = "Go to create";

      renderWithProviders(<Header />, { store: mockStoreUserLogged });

      const expectedHeader = screen.getByRole("heading", {
        name: expectedTitle,
      });
      const linkToRegister = screen.getByRole("link", {
        name: expectedLinkText,
      });

      expect(expectedHeader).toBeInTheDocument();
      expect(linkToRegister).toBeInTheDocument();
    });
  });
});
