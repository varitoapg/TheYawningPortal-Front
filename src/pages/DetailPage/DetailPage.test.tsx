import renderWithProviders from "../../testUtils/renderWithProvider";
import DetailPage from "./DetailPage";

const mockGetCharacter = jest.fn();
jest.mock("../../hooks/useCharacter/useCharacter", () => {
  return () => ({
    getCharacterById: mockGetCharacter,
  });
});

describe("Given the DetailPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should call getCharacterById", () => {
      renderWithProviders(<DetailPage />, {});

      expect(mockGetCharacter).toHaveBeenCalled();
    });
  });
});
