import POM from "./POM";

const uuid = () => Cypress._.random(0, 1e6);
const id = uuid();
const registerpage = new POM();
const testemail = `testname${id}@penguins.com`;

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
    registerpage.inputVerification("Ana", cy.get("#firstName"));

    cy.get("#lastName").type("Scutar");
    registerpage.inputVerification("Scutar", cy.get("#lastName"));

    cy.get("#eMailAdress").type(testemail);
    registerpage.inputVerification(testemail, cy.get("#eMailAdress"));

    cy.get("#password").type("password123");
    registerpage.inputVerification("password123", cy.get("#password"));

    cy.get("#organisationName").type("Penguins Software");
    registerpage.inputVerification(
      "Penguins Software",
      cy.get("#organisationName")
    );

    cy.get("#headquarterAddress").type("Str. Sperantei");
    registerpage.inputVerification(
      "Str. Sperantei",
      cy.get("#headquarterAddress")
    );

    registerpage.buttonVerification("Sign Up", cy.get(".Button_button__JBBzO"));
    cy.get(".Button_button__JBBzO").click();
  });
});
