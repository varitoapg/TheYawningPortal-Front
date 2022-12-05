import setStatsModifier from "./setStatsModifier";

describe("Given the function setStatsModifier", () => {
  describe("When it receives a 1", () => {
    test("Then it should return -5", () => {
      const stat = 1;
      const expectedModifier = "-5";

      const modifier = setStatsModifier(stat);

      expect(modifier).toStrictEqual(expectedModifier);
    });
  });

  describe("When it receives a 3", () => {
    test("Then it should return -4", () => {
      const stat = 3;
      const expectedModifier = "-4";

      const modifier = setStatsModifier(stat);

      expect(modifier).toStrictEqual(expectedModifier);
    });
  });

  describe("When it receives a 5", () => {
    test("Then it should return -3", () => {
      const stat = 5;
      const expectedModifier = "-3";

      const modifier = setStatsModifier(stat);

      expect(modifier).toStrictEqual(expectedModifier);
    });
  });

  describe("When it receives a 7", () => {
    test("Then it should return -2", () => {
      const stat = 7;
      const expectedModifier = "-2";

      const modifier = setStatsModifier(stat);

      expect(modifier).toStrictEqual(expectedModifier);
    });
  });

  describe("When it receives a 9", () => {
    test("Then it should return -1", () => {
      const stat = 9;
      const expectedModifier = "-1";

      const modifier = setStatsModifier(stat);

      expect(modifier).toStrictEqual(expectedModifier);
    });
  });

  describe("When it receives a 11", () => {
    test("Then it should return +0", () => {
      const stat = 11;
      const expectedModifier = "+0";

      const modifier = setStatsModifier(stat);

      expect(modifier).toStrictEqual(expectedModifier);
    });
  });

  describe("When it receives a 13", () => {
    test("Then it should return +1", () => {
      const stat = 13;
      const expectedModifier = "+1";

      const modifier = setStatsModifier(stat);

      expect(modifier).toStrictEqual(expectedModifier);
    });
  });

  describe("When it receives a 15", () => {
    test("Then it should return +2", () => {
      const stat = 15;
      const expectedModifier = "+2";

      const modifier = setStatsModifier(stat);

      expect(modifier).toStrictEqual(expectedModifier);
    });
  });

  describe("When it receives a 17", () => {
    test("Then it should return +3", () => {
      const stat = 17;
      const expectedModifier = "+3";

      const modifier = setStatsModifier(stat);

      expect(modifier).toStrictEqual(expectedModifier);
    });
  });

  describe("When it receives a 19", () => {
    test("Then it should return +4", () => {
      const stat = 19;
      const expectedModifier = "+4";

      const modifier = setStatsModifier(stat);

      expect(modifier).toStrictEqual(expectedModifier);
    });
  });

  describe("When it receives a 20", () => {
    test("Then it should return +5", () => {
      const stat = 20;
      const expectedModifier = "+5";

      const modifier = setStatsModifier(stat);

      expect(modifier).toStrictEqual(expectedModifier);
    });
  });
});
