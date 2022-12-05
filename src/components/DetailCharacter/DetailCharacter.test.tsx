import { screen } from "@testing-library/react";
import { getRandomCharacter } from "../../factories/characterFactory";
import renderWithProviders from "../../testUtils/renderWithProvider";
import DetailCharacter from "./DetailCharacter";

describe("Given the DetailCharacter component", () => {
  describe("When it's rendered with character information", () => {
    test("Then it should show an image with 'character name Avatar' as aria-label, headings with character speed and strength and 3 spans with name, background and details", () => {
      const character = getRandomCharacter();

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
});
