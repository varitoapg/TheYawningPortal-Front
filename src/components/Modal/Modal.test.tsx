import renderWithProviders from "../../testUtils/renderWithProvider";
import Modal from "./Modal";
import { screen } from "@testing-library/react";

describe("Given a Modal component", () => {
  describe("When it's render with a text 'Sorry!' and isError true", () => {
    test("Then it should show a text with 'Sorry!' and a Title with a '1'", () => {
      const modalText = "Sorry!";
      const modalTitle = "1";
      const informationText = "Fail!";

      renderWithProviders(<Modal isError={true} text={modalText} />);

      const expectedModalText = screen.getByText(modalText);
      const expectedIcon = screen.getByText(modalTitle);
      const expectedModalInformation = screen.getByText(informationText);

      expect(expectedModalText).toBeInTheDocument();
      expect(expectedIcon).toBeInTheDocument();
      expect(expectedModalInformation).toBeInTheDocument();
    });
  });

  describe("When it's render with a text 'Crit!' and isError false", () => {
    test("Then it should show a text with 'Crit!' and a Title with a '20'", () => {
      const modalText = "Congratulations";
      const modalTitle = "20";
      const informationText = "Crit!";

      renderWithProviders(<Modal isError={false} text={modalText} />);

      const expectedModalText = screen.getByText(modalText);
      const expectedIcon = screen.getByText(modalTitle);
      const expectedModalInformation = screen.getByText(informationText);

      expect(expectedModalText).toBeInTheDocument();
      expect(expectedIcon).toBeInTheDocument();
      expect(expectedModalInformation).toBeInTheDocument();
    });
  });
});
