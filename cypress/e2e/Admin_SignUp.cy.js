describe("Admin Sign Up", () => {
  beforeEach("Verify the Sign Up link", () => {
    cy.visit(
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/register"
    );
    cy.url().should(
      "include",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/register"
    );
  });

  it("Insert text in the fields", () => {
    cy.get("#firstName").type("Ana");
    cy.get("#lastName").type("Scutar");
    cy.get("#eMailAdress").type("ana.scutar@student.usv.ro");
    cy.get("#password").type("password123");
    cy.get("#organisationName").type("Penguins Software");
    cy.get("#headquarterAddress").type("Str. Sperantei");
    cy.get(".Button_button__JBBzO").click();
  });
});
