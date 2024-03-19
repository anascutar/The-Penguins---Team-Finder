import POM from "./POM";
const invitations = new POM();
describe("Admin Employees", () => {
  beforeEach("Login", () => {
    cy.login();
    cy.Invitations();
  });

  it("Verify if the user can send an invitations", () => {
    cy.get("#singleEmail").scrollIntoView().should("be.visible").click();

    cy.get("#singleEmail").type("ana.scutar@studnt.usv.ro");
    invitations.inputVerification(
      "ana.scutar@studnt.usv.ro",
      cy.get("#singleEmail")
    );
    cy.get(":nth-child(5) > .Button_button__JBBzO").click();
  });
});
