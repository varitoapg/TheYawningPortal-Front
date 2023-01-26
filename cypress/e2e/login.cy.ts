describe("Given The Yawning Portal's login page", () => {
  describe("When the user types 'SuperAdmin' in username input and 'SuperAdmin' in password input, and clicks in Log in button", () => {
    it("Then it should go to Home page", () => {
      cy.visit("/");
      cy.findByRole("textbox", { name: "Username" }).type("superAdmin");
      cy.findByLabelText("Password").type("superAdmin");
      cy.findByRole("button", { name: "Log in" }).click();

      cy.findByRole("combobox", { name: "class:" }).should("exist");
      cy.url().should("include", "/home");
    });
  });
});
