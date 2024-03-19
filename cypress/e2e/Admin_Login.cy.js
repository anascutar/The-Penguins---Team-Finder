import POM from "./POM";
const uuid = () => Cypress._.random(0, 1e6);
const id = uuid();
const registerpage = new POM();
const login = new POM();
const testemail = `testname${id}@penguins.com`;
describe("Admin Login", () => {
  beforeEach("Verify the SLogin link", () => {
    cy.visit(
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/login"
    );
    cy.url().should(
      "include",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/login"
    );
  });

  it("Verify if the user cannot login with valid email and invalid password", () => {
    cy.get("#eMailAdress").type("anamariascutar@gmail.com");
    login.inputVerification("anamariascutar@gmail.com", cy.get("#eMailAdress"));

    cy.get("#password").type("password12");
    login.inputVerification("password12", cy.get("#password"));

    cy.get(".Button_button__JBBzO").click();
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/login"
    );

    cy.wait(1000);
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/login"
    );
  });

  it("Verify if the user cannot login with invalid email and valid password", () => {
    cy.get("#eMailAdress").type("a@gmail.com");
    login.inputVerification("a@gmail.com", cy.get("#eMailAdress"));

    cy.get("#password").type("password123");
    login.inputVerification("password123", cy.get("#password"));

    cy.get(".Button_button__JBBzO").click();
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/login"
    );
    cy.wait(1000);
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/login"
    );
  });

  it("Verify if the user cannot login with blank mandatory fields", () => {
    cy.get(".Button_button__JBBzO").click();
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/login"
    );
    cy.wait(1000);
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/login"
    );
  });

  it("verify if the user can see the hide or show the password", () => {
    cy.get("#eMailAdress").type(testemail);
    login.inputVerification(testemail, cy.get("#eMailAdress"));

    cy.get("#password").type("password123");
    login.inputVerification("password123", cy.get("#password"));

    cy.get("#root > div > div > div > div > div > div svg")
      .scrollIntoView()
      .should("be.visible")
      .click();

    cy.wait(1000);
    cy.get("#root > div > div > div > div > div > div svg")
      .should("be.visible")
      .click();

    cy.wait(1000);
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/login"
    );
  });

  it("verify if the user can check the Remember Me option", () => {
    cy.get("#eMailAdress").type(testemail);
    login.inputVerification(testemail, cy.get("#eMailAdress"));

    cy.get("#password").type("password123");
    login.inputVerification("password123", cy.get("#password"));

    cy.get(".Login_checkBox__w8SL8 > .Input_containerInput__0a1rN")
      .scrollIntoView()
      .should("be.visible")
      .click();

    cy.wait(1000);
    cy.get(".Login_checkBox__w8SL8 > .Input_containerInput__0a1rN")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.wait(1000);
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/login"
    );
  });

  it("Verify if the user can login with valid email and password", () => {
    cy.get("#eMailAdress").type("anamariascutar@gmail.com");
    login.inputVerification("anamariascutar@gmail.com", cy.get("#eMailAdress"));

    cy.get("#password").type("password123");
    login.inputVerification("password123", cy.get("#password"));

    cy.get(".Button_button__JBBzO").click();
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/login"
    );
    cy.wait(5000);
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/"
    );
    login.titleVerification("Dashboard", cy.get("#root > div > nav > a"));
  });
});
