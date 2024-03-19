// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", () => {
  cy.visit("https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/");
  cy.get("#eMailAdress").type("anamariascutar@gmail.com");
  cy.get("#password").type("password123");
  cy.get(".Button_button__JBBzO").click();

  cy.url().should(
    "include",
    "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/"
  );
});

Cypress.Commands.add("TeamRoles", () => {
  cy.get('[href="/team-roles"]').click();
  cy.wait(2000);
  cy.url().should(
    "eq",
    "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/team-roles"
  );
});
Cypress.Commands.add("Departments", () => {
  cy.get('[href="/departments/admin/all"]').click();
  cy.wait(2000);
  cy.url().should(
    "eq",
    "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/departments/admin/all"
  );
});
Cypress.Commands.add("Employees", () => {
  cy.get('[href="/employees/all"]').click();
  cy.wait(2000);
  cy.url().should(
    "eq",
    "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/employees/all"
  );
});

//   
Cypress.Commands.add("Invitations", () => {
  cy.get('[href="/employees/all"]').click();
  cy.wait(2000);
  cy.url().should(
    "eq",
    "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/employees/all"
  );
  cy.get('[href="/employees/invitations"]').click();
  cy.url().should("eq","https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/employees/invitations")
});
