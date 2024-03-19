import POM from "./POM";
const invitations = new POM();
describe("Admin Employees", () => {
  beforeEach("Login", () => {
    cy.login();
    cy.Invitations();
  });

  it("Verify if the user can send an invitations", () => {
    cy.get("#singleEmail").scrollIntoView().should("be.visible").click();

    cy.get("#singleEmail").type("ana.scutar@student.usv.ro");
    invitations.inputVerification(
      "ana.scutar@student.usv.ro",
      cy.get("#singleEmail")
    );
    invitations.buttonVerification(
      "Send Invitations",
      cy.get(":nth-child(5) > .Button_button__JBBzO")
    );
    cy.get(":nth-child(5) > .Button_button__JBBzO").click();

    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/employees/invitations"
    );

  });
});
