import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../testUtils/renderWithProvider";
import CreateForm from "./CreateForm";

const mockSubmit = jest.fn();
const mockGetCharacters = jest.fn();
jest.mock("../../hooks/useCharacter/useCharacter.ts", () => {
  return () => ({
    createCharacter: mockSubmit,
    getUserCharacters: mockGetCharacters,
  });
});

describe("Given the LoginForm Component", () => {
  const nameText = "name:";
  const racetext = "race:";
  const backgroundText = "background:";
  const textDetails = "details:";
  const classSelect = "class:";
  const optionClass = "sorcerer";
  const strengthScore = "strength";
  const speedScore = "speed";
  const constitutionScore = "constitution";
  const dexterityScore = "dexterity";
  const intelligenceScore = "intelligence";
  const wisdomScore = "wisdom";
  const charismaScore = "charisma";
  const createButton = "Create";

  describe("When it's rendered", () => {
    test("Then it should return 4 input text elements, 7 spinbutton a heading 'armor class, option 'sorcerer', a select 'class:' a button 'create'", () => {
      const headingText = "armor class";

      renderWithProviders(<CreateForm isEdit={false} />);

      const expectedName = screen.getByRole("textbox", {
        name: nameText,
      });
      const expectedRace = screen.getByRole("textbox", {
        name: racetext,
      });
      const expectedBackground = screen.getByRole("textbox", {
        name: backgroundText,
      });
      const expectedDetails = screen.getByRole("textbox", {
        name: textDetails,
      });
      const classCharacterSelect = screen.getByRole("combobox", {
        name: classSelect,
      });
      const classCharacterOption = screen.getByRole("option", {
        name: optionClass,
      });
      const expectedScoreStrength = screen.getByRole("spinbutton", {
        name: strengthScore,
      });
      const expectedScoreSpeed = screen.getByRole("spinbutton", {
        name: speedScore,
      });
      const expectedScoreConstitution = screen.getByRole("spinbutton", {
        name: constitutionScore,
      });
      const expectedScoreDexterity = screen.getByRole("spinbutton", {
        name: dexterityScore,
      });
      const expectedScoreIntelligence = screen.getByRole("spinbutton", {
        name: intelligenceScore,
      });
      const expectedScoreWisdom = screen.getByRole("spinbutton", {
        name: wisdomScore,
      });
      const expectedScoreCharisma = screen.getByRole("spinbutton", {
        name: charismaScore,
      });
      const expectedButton = screen.getByRole("button", {
        name: createButton,
      });
      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedName).toBeInTheDocument();
      expect(expectedRace).toBeInTheDocument();
      expect(expectedBackground).toBeInTheDocument();
      expect(expectedDetails).toBeInTheDocument();
      expect(classCharacterSelect).toBeInTheDocument();
      expect(classCharacterOption).toBeInTheDocument();
      expect(expectedScoreStrength).toBeInTheDocument();
      expect(expectedScoreSpeed).toBeInTheDocument();
      expect(expectedScoreConstitution).toBeInTheDocument();
      expect(expectedScoreDexterity).toBeInTheDocument();
      expect(expectedScoreIntelligence).toBeInTheDocument();
      expect(expectedScoreWisdom).toBeInTheDocument();
      expect(expectedScoreCharisma).toBeInTheDocument();
      expect(expectedButton).toBeInTheDocument();
      expect(expectedHeading).toBeInTheDocument();
    });
  });

  describe("When it's rendered all inputs fullfilled and Create button it's clicked", () => {
    test("Then the form should be submited", async () => {
      const image = new File(["avatar"], "avatar.jpg", {
        type: "image/jpg",
      });

      renderWithProviders(<CreateForm isEdit={false} />);

      const expectedImage = screen.getByTestId("input image");
      const expectedName = screen.getByRole("textbox", {
        name: nameText,
      });
      const expectedRace = screen.getByRole("textbox", {
        name: racetext,
      });
      const expectedBackground = screen.getByRole("textbox", {
        name: backgroundText,
      });
      const expectedDetails = screen.getByRole("textbox", {
        name: textDetails,
      });
      const classCharacterSelect = screen.getByRole("combobox", {
        name: classSelect,
      });
      const classCharacterOption = screen.getByRole("option", {
        name: optionClass,
      });
      const expectedScoreStrength = screen.getByRole("spinbutton", {
        name: strengthScore,
      });
      const expectedScoreSpeed = screen.getByRole("spinbutton", {
        name: speedScore,
      });
      const expectedScoreConstitution = screen.getByRole("spinbutton", {
        name: constitutionScore,
      });
      const expectedScoreDexterity = screen.getByRole("spinbutton", {
        name: dexterityScore,
      });
      const expectedScoreIntelligence = screen.getByRole("spinbutton", {
        name: intelligenceScore,
      });
      const expectedScoreWisdom = screen.getByRole("spinbutton", {
        name: wisdomScore,
      });
      const expectedScoreCharisma = screen.getByRole("spinbutton", {
        name: charismaScore,
      });
      const expectedButton = screen.getByRole("button", {
        name: createButton,
      });

      URL.createObjectURL = jest.fn().mockReturnValue(image.type);

      await userEvent.type(expectedName, "test");
      await userEvent.type(expectedRace, "test");
      await userEvent.type(expectedBackground, "test");
      await userEvent.type(expectedDetails, "test");
      await userEvent.type(expectedScoreStrength, "1");
      await userEvent.type(expectedScoreSpeed, "2");
      await userEvent.type(expectedScoreConstitution, "3");
      await userEvent.type(expectedScoreDexterity, "4");
      await userEvent.type(expectedScoreIntelligence, "4");
      await userEvent.type(expectedScoreWisdom, "4");
      await userEvent.type(expectedScoreCharisma, "4");
      await userEvent.upload(expectedImage!, image);

      userEvent.click(classCharacterSelect);

      userEvent.click(within(classCharacterOption).getByText(/sorcerer/i));
      await userEvent.click(expectedButton);

      await userEvent.click(expectedButton);

      expect(mockSubmit).toBeCalled();
    });
  });
});
