import POM from "./POM";
const uuid = () => Cypress._.random(0, 1e6);
const id = uuid();
const registerpage = new POM();
const navbar = new POM();
const teamroles = new POM();
const testemail = `testname${id}@penguins.com`;
describe("Admin Team Roles", () => {
  beforeEach("Login", () => {
    cy.login();
    cy.TeamRoles();
  });

  it("Verify if the user can delete a team role", () => {
    cy.get(
      ':nth-child(3) > :nth-child(4) > .MuiButtonBase-root > [data-testid="DeleteForeverIcon"]'
    ).click();
    cy.wait(2000);

    navbar.buttonVerification(
      "Delete",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)").click();
  });

  it("Verify if the user can cancel deleting a team role", () => {
    cy.get(
      ':nth-child(3) > :nth-child(4) > .MuiButtonBase-root > [data-testid="DeleteForeverIcon"] > path'
    ).click();
    cy.wait(2000);

    navbar.buttonVerification(
      "Cancel",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)").click();
  });

  it("Verify if the user can edit a team role", () => {
    cy.get(":nth-child(3) > td:nth-child(3) ").click();
    cy.wait(2000);

    cy.get("#teamRoleName").click();
    cy.get("#teamRoleName").clear().type("Engineer QA");
    teamroles.inputVerification("Engineer QA", cy.get("#teamRoleName"));
    navbar.buttonVerification(
      "Confirm",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)").click();
  });

  it("Verify if the user can cancel editing a team role", () => {
    cy.get(":nth-child(3) > td:nth-child(3) ").click();
    cy.wait(2000);

    cy.get("#teamRoleName").click();
    cy.get("#teamRoleName").clear().type("Engineer QA");
    teamroles.inputVerification("Engineer QA", cy.get("#teamRoleName"));
    navbar.buttonVerification(
      "Cancel",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)").click();
  });

  it("Verify if the user can order the team roles", () => {
    cy.get(":nth-child(2) > .MuiButtonBase-root");
    cy.wait(2000);
  });
  it("Verify if the user can cancel adding a new team role", () => {
    navbar.buttonVerification("Add role", cy.get(".Button_button__JBBzO"));
    cy.get(".Button_button__JBBzO")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.wait(2000);

    cy.get("#teamRoleName").type("DevOps Engineer");
    teamroles.inputVerification("DevOps Engineer", cy.get("#teamRoleName"));

    teamroles.buttonVerification(
      "Cancel",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)").click();
  });

  it("Verify if the user can add a new team role", () => {
    navbar.buttonVerification("Add role", cy.get(".Button_button__JBBzO"));
    cy.get(".Button_button__JBBzO")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.wait(1000);

    cy.get("#teamRoleName").type("Gaming Developer");
    teamroles.inputVerification("Gaming Developer", cy.get("#teamRoleName"));

    teamroles.buttonVerification(
      "Confirm",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)").click();
  });
});
