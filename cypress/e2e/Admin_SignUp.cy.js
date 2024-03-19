import POM from "./POM";

const uuid = () => Cypress._.random(0, 1e6);
const id = uuid();
const registerpage = new POM();
const testemail = `testname${id}@penguins.com`;
const nr = uuid();

function generateRandomString(length) {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const organization = generateRandomString(5);
const street = generateRandomString(5);

const testOrganization = `${organization} Software`;
const testStreet = ` Strada ${street} nr  ${nr}`;

describe("Admin Sign Up", () => {
  beforeEach("Verify the Sign Up link", () => {
    cy.visit(
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/register"
    );
    cy.url().should(
      "include",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/register"
    );

    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/register"
    );
  });

  it("Verify if <New member? Register> redirects to register page", () => {
    cy.get("#root > div > div > div > div > div > div > div > button")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.wait(1000);
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/register"
    );

    cy.wait(1000);
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/register"
    );
  });
  it("Verify if the user can register with valid inputs", () => {
    cy.get("#firstName").type("Ana");
    registerpage.inputVerification("Ana", cy.get("#firstName"));

    cy.get("#lastName").type("Scutar");
    registerpage.inputVerification("Scutar", cy.get("#lastName"));

    cy.get("#eMailAdress").type(testemail);
    registerpage.inputVerification(testemail, cy.get("#eMailAdress"));

    cy.get("#password").type("password123");
    registerpage.inputVerification("password123", cy.get("#password"));

    cy.get("#organisationName").type(testOrganization);
    registerpage.inputVerification(
      testOrganization,
      cy.get("#organisationName")
    );

    cy.get("#headquarterAddress").type(testStreet);
    registerpage.inputVerification(testStreet, cy.get("#headquarterAddress"));

    cy.get(".Button_button__JBBzO").click();
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/login"
    );
  });

  it("Registration with an email already in use", () => {
    cy.get("#firstName").type("Ana");
    registerpage.inputVerification("Ana", cy.get("#firstName"));

    cy.get("#lastName").type("Scutar");
    registerpage.inputVerification("Scutar", cy.get("#lastName"));

    cy.get("#eMailAdress").type("anamariascutar@gmail.com");
    registerpage.inputVerification(
      "anamariascutar@gmail.com",
      cy.get("#eMailAdress")
    );

    cy.get("#password").type("password123");
    registerpage.inputVerification("password123", cy.get("#password"));

    cy.get("#organisationName").type("North software");
    registerpage.inputVerification(
      "North software",
      cy.get("#organisationName")
    );

    cy.get("#headquarterAddress").type("Strada Trandafir nr 18");
    registerpage.inputVerification(
      "Strada Trandafir nr 18",
      cy.get("#headquarterAddress")
    );

    cy.get(".Button_button__JBBzO").click();
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/register"
    );
  });

  it("Registration with an short password", () => {
    cy.get("#firstName").type("Ana");
    registerpage.inputVerification("Ana", cy.get("#firstName"));

    cy.get("#lastName").type("Scutar");
    registerpage.inputVerification("Scutar", cy.get("#lastName"));

    cy.get("#eMailAdress").type("anamariascutar@gmail.com");
    registerpage.inputVerification(
      "anamariascutar@gmail.com",
      cy.get("#eMailAdress")
    );

    cy.get("#password").type("pas");
    registerpage.inputVerification("pas", cy.get("#password"));

    cy.get("#organisationName").type("North software");
    registerpage.inputVerification(
      "North software",
      cy.get("#organisationName")
    );

    cy.get("#headquarterAddress").type("Strada Trandafir nr 18");
    registerpage.inputVerification(
      "Strada Trandafir nr 18",
      cy.get("#headquarterAddress")
    );

    cy.get(".Button_button__JBBzO").click();
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/register"
    );
  });

  it("Registration with a blank mandatory", () => {
    cy.get("#firstName").type("Ana");
    registerpage.inputVerification("Ana", cy.get("#firstName"));

    cy.get("#lastName").type("Scutar");
    registerpage.inputVerification("Scutar", cy.get("#lastName"));

    cy.get("#eMailAdress").type("anamariascutar@gmail.com");
    registerpage.inputVerification(
      "anamariascutar@gmail.com",
      cy.get("#eMailAdress")
    );

    cy.get("#organisationName").type("North software");
    registerpage.inputVerification(
      "North software",
      cy.get("#organisationName")
    );

    cy.get("#headquarterAddress").type("Strada Trandafir nr 18");
    registerpage.inputVerification(
      "Strada Trandafir nr 18",
      cy.get("#headquarterAddress")
    );

    cy.get(".Button_button__JBBzO").click();
    cy.wait(1000);
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/register"
    );
  });
  it("verify if the user can see the hide or show the password", () => {
    cy.get("#firstName").type("Ana");
    registerpage.inputVerification("Ana", cy.get("#firstName"));

    cy.get("#lastName").type("Scutar");
    registerpage.inputVerification("Scutar", cy.get("#lastName"));

    cy.get("#eMailAdress").type(testemail);
    registerpage.inputVerification(testemail, cy.get("#eMailAdress"));

    cy.get("#password").type("password123");
    registerpage.inputVerification("password123", cy.get("#password"));

    cy.get("#organisationName").type(testOrganization);
    registerpage.inputVerification(
      testOrganization,
      cy.get("#organisationName")
    );

    cy.get("#headquarterAddress").type(testStreet);
    registerpage.inputVerification(testStreet, cy.get("#headquarterAddress"));

    cy.get("#root > div > div > div > div > div > div svg")
      .should("be.visible")
      .click();

    cy.wait(1000);
    cy.get("#root > div > div > div > div > div > div svg")
      .should("be.visible")
      .click();
  });

  it("Verify if the email has validation format", () => {
    cy.get("#firstName").type("Ana");
    registerpage.inputVerification("Ana", cy.get("#firstName"));

    cy.get("#lastName").type("Scutar");
    registerpage.inputVerification("Scutar", cy.get("#lastName"));

    cy.get("#eMailAdress").type("testemail.com");
    registerpage.inputVerification("testemail.com", cy.get("#eMailAdress"));

    cy.get("#password").type("password123");
    registerpage.inputVerification("password123", cy.get("#password"));

    cy.get("#organisationName").type(testOrganization);
    registerpage.inputVerification(
      testOrganization,
      cy.get("#organisationName")
    );

    cy.get("#headquarterAddress").type(testStreet);
    registerpage.inputVerification(testStreet, cy.get("#headquarterAddress"));

    cy.get(".Button_button__JBBzO").click();
    cy.wait(5000);
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/register"
    );
  });
 
});
