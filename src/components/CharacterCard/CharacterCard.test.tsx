import { screen } from "@testing-library/react";
import { getRandomCharacter } from "../../factories/characterFactory";
import { Character } from "../../redux/features/characterSlice/reducer/types";
import renderWithProviders from "../../testUtils/renderWithProvider";
import CharacterCard from "./CharacterCard";

describe("Given a component CharacterCard", () => {
  let character: Character = getRandomCharacter();

  describe("When it's rendered with a character with isAlive true", () => {
    test("Then it should show an image with aria label 'character.name', a button with aria label 'Delete character' another one wiht 'Kill character' and a heading with 'character.name'", () => {
      character = { ...character, isAlive: true };
      const expectedName = character.name;
      const expectedAriaButtonDelete = "Delete character";
      const expectedAriaButtonKill = "Kill character";

      renderWithProviders(<CharacterCard character={character} />);

      const expectedImage = screen.queryByRole("img", {
        name: expectedName,
      }) as HTMLImageElement;
      const expectedHeading = screen.queryByRole("heading", {
        name: expectedName,
      });
      const expectedKillButton = screen.queryByLabelText(
        expectedAriaButtonKill
      );
      const expectedDeleteButton = screen.queryByLabelText(
        expectedAriaButtonDelete
      );

      expect(expectedImage).toBeInTheDocument();
      expect(expectedImage.alt).toBe(expectedName);
      expect(expectedHeading).toBeInTheDocument();
      expect(expectedKillButton).toBeInTheDocument();
      expect(expectedDeleteButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a character with isAlive false", () => {
    test("Then it should show an image with aria label 'character.name', a button with aria label 'Delete character' another one wiht 'Resurrect character' and a heading with 'character.name'", () => {
      character = { ...character, isAlive: false };
      const expectedName = character.name;
      const expectedAriaButtonDelete = "Delete character";
      const expectedAriaButtonKill = "Resurrect character";

      renderWithProviders(<CharacterCard character={character} />);

      const expectedImage = screen.queryByRole("img", {
        name: expectedName,
      }) as HTMLImageElement;
      const expectedHeading = screen.queryByRole("heading", {
        name: expectedName,
      });
      const expectedKillButton = screen.queryByLabelText(
        expectedAriaButtonKill
      );
      const expectedDeleteButton = screen.queryByLabelText(
        expectedAriaButtonDelete
      );

      expect(expectedImage).toBeInTheDocument();
      expect(expectedImage.alt).toBe(expectedName);
      expect(expectedHeading).toBeInTheDocument();
      expect(expectedKillButton).toBeInTheDocument();
      expect(expectedDeleteButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a character without image and isAlive true", () => {
    test("Then it should show a empty div with aria-label 'Empty image',a button with aria label 'Delete character' another one wiht 'Kill character' and a heading with 'character.name'", () => {
      character = { ...character, imageBackup: "", isAlive: true };
      const expectedName = character.name;
      const expectedAriaTextNoImage = "Empty image";
      const expectedAriaButtonDelete = "Delete character";
      const expectedAriaButtonKill = "Kill character";

      renderWithProviders(<CharacterCard character={character} />);

      const expectedNoImage = screen.queryByLabelText(expectedAriaTextNoImage);
      const expectedHeading = screen.queryByRole("heading", {
        name: expectedName,
      });
      const expectedKillButton = screen.queryByLabelText(
        expectedAriaButtonKill
      );
      const expectedDeleteButton = screen.queryByLabelText(
        expectedAriaButtonDelete
      );

      expect(expectedNoImage).toBeInTheDocument();
      expect(expectedHeading).toBeInTheDocument();
      expect(expectedKillButton).toBeInTheDocument();
      expect(expectedDeleteButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a character without image and isAlive false", () => {
    test("Then it should show a empty div with aria-label 'Empty image',a button with aria label 'Delete character' another one wiht 'Resurrect character' and a heading with 'character.name'", () => {
      character = { ...character, imageBackup: "", isAlive: false };
      const expectedName = character.name;
      const expectedAriaTextNoImage = "Empty image";
      const expectedAriaButtonDelete = "Delete character";
      const expectedAriaButtonKill = "Resurrect character";

      renderWithProviders(<CharacterCard character={character} />);

      const expectedNoImage = screen.queryByLabelText(expectedAriaTextNoImage);
      const expectedHeading = screen.queryByRole("heading", {
        name: expectedName,
      });
      const expectedKillButton = screen.queryByLabelText(
        expectedAriaButtonKill
      );
      const expectedDeleteButton = screen.queryByLabelText(
        expectedAriaButtonDelete
      );

      expect(expectedNoImage).toBeInTheDocument();
      expect(expectedHeading).toBeInTheDocument();
      expect(expectedKillButton).toBeInTheDocument();
      expect(expectedDeleteButton).toBeInTheDocument();
    });
  });
});
