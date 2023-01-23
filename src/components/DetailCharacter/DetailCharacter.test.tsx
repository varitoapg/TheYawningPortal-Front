import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getRandomCharacter } from "../../factories/characterFactory";
import renderWithProviders from "../../testUtils/renderWithProvider";
import DetailCharacter from "./DetailCharacter";

const mockDelete = jest.fn();
const mockGetUser = jest.fn();
jest.mock("../../hooks/useCharacter/useCharacter.ts", () => {
  return () => ({
    deleteCharacter: mockDelete,
    getUserCharacters: mockGetUser,
  });
});

describe("Given the DetailCharacter component", () => {
  const character = getRandomCharacter();

  describe("When it's rendered with character information", () => {
    test("Then it should show an image with 'character name Avatar' as aria-label, headings with character speed and strength and 3 spans with name, background and details", () => {
      renderWithProviders(<DetailCharacter character={character} />);

      const expectedImage = screen.queryByLabelText(`${character.name} Avatar`);
      const expectedName = screen.queryByText(character.name);
      const expectedSpeed = screen.queryByLabelText("speed score");
      const expectedStrength = screen.queryByLabelText("strength score");
      const expectedBackground = screen.queryByText(character.background);
      const expectedDetails = screen.queryByText(character.details);

      expect(expectedImage).toBeInTheDocument();
      expect(expectedName).toBeInTheDocument();
      expect(expectedSpeed).toBeInTheDocument();
      expect(expectedStrength).toBeInTheDocument();
      expect(expectedName).toBeInTheDocument();
      expect(expectedBackground).toBeInTheDocument();
      expect(expectedDetails).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a character and clicks delete button", () => {
    test("Then it should call deleteCharacter", async () => {
      const expectedAriaButtonDelete = "Delete character";

      renderWithProviders(<DetailCharacter character={character} />);

      const expectedDeleteButton = screen.queryByLabelText(
        expectedAriaButtonDelete
      );

      await userEvent.click(expectedDeleteButton!);

      expect(mockDelete).toHaveBeenCalled();
    });
  });
});
