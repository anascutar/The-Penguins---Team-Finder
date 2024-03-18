import POM from "./POM";
const employees = new POM();
describe("Admin Team Roles", () => {
  beforeEach("Login", () => {
    cy.login();
    cy.Employees();
  });

  it("Verify if the user can  assign a new role", () => {
    cy.get(".MuiTableBody-root > :nth-child(3) > :nth-child(6)")
      .scrollIntoView()
      .should("be.visible")
      .click();

    cy.get(".css-12lx417-indicatorContainer").click();
    employees.buttonVerification(
      "Department Manager",
      cy.get("#react-select-2-option-1")
    );
    cy.get("#react-select-2-option-1").click();

    //     cy.wait(1000);
    //     cy.get("#departmentName").type("Front-End");
    //     departments.inputVerification("Front-End", cy.get("#departmentName"));
    employees.buttonVerification(
      "Confirm",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)").click();
  });

  //   it("Verify if the user can cancel assigning new role", () => {
  //     cy.get(".MuiTableBody-root > :nth-child(3) > :nth-child(6)")
  //       .scrollIntoView()
  //       .should("be.visible")
  //       .click();

  //     cy.get(".css-1uhzhgj-indicatorContainer").click();
  //         employees.buttonVerification(
  //           "Department Manager",
  //           cy.get("#react-select-2-option-1")
  //         );
  //         cy.get("#react-select-2-option-1").click();

  //         employees.buttonVerification(
  //           "Confirm",
  //           cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)")
  //         );
  //         cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)").click();
  //   });
});
