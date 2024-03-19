import POM from "./POM";
const employees = new POM();
describe("Admin Employees", () => {
  beforeEach("Login", () => {
    cy.login();
    cy.Employees();
  });
  it("Verify if the table bar has Nr. Crt., first name, last name, email, role and action elements ", () => {
    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(1)")
      .should("be.visible")
      .should("have.text", "Nr. crt.");

    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(2)")
      .should("be.visible")
      .should("have.text", "First Name");
    cy.get(":nth-child(3) > .MuiButtonBase-root")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(3)")
      .should("be.visible")
      .should("have.text", "Last Name");
    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(6)")
      .should("be.visible")
      .should("have.text", "Actions");

    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(5)")
      .should("be.visible")
      .should("have.text", "Roles");

    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(4)")
      .should("be.visible")
      .should("have.text", "Email");
  });
  it("Verify if the user can order the employees by the first name", () => {
    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(2)")
      .should("be.visible")
      .should("have.text", "First Name");
    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(2)")
      .scrollIntoView()
      .should("be.visible")
      .click();

    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/employees/all"
    );
  });
  it("Verify if the user can order the employees by the last  name", () => {
    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(3)")
      .should("be.visible")
      .should("have.text", "Last Name");
    cy.get(":nth-child(3) > .MuiButtonBase-root")
      .scrollIntoView()
      .should("be.visible")
      .click();

    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/employees/all"
    );
  });

  it("Verify if the user can  assign a new role as Organization Admin", () => {
    cy.get(
      ':nth-child(3) > :nth-child(6) > .Users_allEmployeesButtonsAction__0Hzkm > [aria-label="Add role"]'
    )
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get("#parent-modal-title")
      .should("be.visible")
      .should("have.text", "Assign new role");
    cy.get("#react-select-2-placeholder").click();
    employees.buttonVerification(
      "Organisation Admin",
      cy.get("#react-select-2-option-0")
    );
    cy.get("#react-select-2-option-0")
      .scrollIntoView()
      .should("be.visible")
      .click();
    employees.buttonVerification(
      "Confirm",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)").click();
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/employees/all"
    );
  });
  it("Verify if the user can  assign a new role as Department Manager", () => {
    cy.get(
      ':nth-child(3) > :nth-child(6) > .Users_allEmployeesButtonsAction__0Hzkm > [aria-label="Add role"]'
    )
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get("#parent-modal-title")
      .should("be.visible")
      .should("have.text", "Assign new role");
    cy.get("#react-select-2-placeholder").click();
    employees.buttonVerification(
      "Department Manager",
      cy.get("#react-select-2-option-0")
    );
    cy.get("#react-select-2-option-0").click();
    employees.buttonVerification(
      "Confirm",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)").click();
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/employees/all"
    );
  });
  it("Verify if the user can  assign a new role as Project Manager", () => {
    cy.get(
      ':nth-child(3) > :nth-child(6) > .Users_allEmployeesButtonsAction__0Hzkm > [aria-label="Add role"]'
    )
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get("#parent-modal-title")
      .should("be.visible")
      .should("have.text", "Assign new role");
    cy.get("#react-select-2-placeholder").click();
    employees.buttonVerification(
      "Project Manager",
      cy.get("#react-select-2-option-0")
    );
    cy.get("#react-select-2-option-0").click();
    employees.buttonVerification(
      "Confirm",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)").click();
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/employees/all"
    );
  });

  it("Verify if the user can cancel  deleting an assigned role", () => {
    cy.get(
      ':nth-child(3) > :nth-child(6) > .Users_allEmployeesButtonsAction__0Hzkm > .MuiButtonBase-root > [data-testid="DeleteForeverIcon"] > path'
    )
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get("#parent-modal-title")
      .should("be.visible")
      .should("have.text", "Delete a role");
    cy.get("#react-select-2-placeholder").click();

    employees.buttonVerification(
      "Cancel",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)").click();
  });
  it("Verify if the user can delete an assigned role as Organisation Admin", () => {
    cy.get(
      ':nth-child(3) > :nth-child(6) > .Users_allEmployeesButtonsAction__0Hzkm > .MuiButtonBase-root > [data-testid="DeleteForeverIcon"] > path'
    )
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get("#parent-modal-title")
      .should("be.visible")
      .should("have.text", "Delete a role");
    cy.get("#react-select-2-placeholder").click();
    employees.buttonVerification(
      "Organisation Admin",
      cy.get("#react-select-2-option-0")
    );
    cy.get("#react-select-2-option-0").click();
    employees.buttonVerification(
      "Delete",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)").click();
    cy.wait(1000);
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/employees/all"
    );
  });
  it("Verify if the user can delete an assigned role as Department Manager", () => {
    cy.get(
      ':nth-child(3) > :nth-child(6) > .Users_allEmployeesButtonsAction__0Hzkm > .MuiButtonBase-root > [data-testid="DeleteForeverIcon"] > path'
    )
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get("#parent-modal-title")
      .should("be.visible")
      .should("have.text", "Delete a role");
    cy.get("#react-select-2-placeholder").click();
    employees.buttonVerification(
      "Department Manager",
      cy.get("#react-select-2-option-0")
    );
    cy.get("#react-select-2-option-0").click();
    employees.buttonVerification(
      "Delete",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)").click();
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/employees/all"
    );
  });
  it("Verify if the user can delete an assigned role as Project Manager", () => {
    cy.get(
      ':nth-child(3) > :nth-child(6) > .Users_allEmployeesButtonsAction__0Hzkm > .MuiButtonBase-root > [data-testid="DeleteForeverIcon"] > path'
    )
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get("#parent-modal-title")
      .should("be.visible")
      .should("have.text", "Delete a role");
    cy.get("#react-select-2-placeholder").click();
    employees.buttonVerification(
      "Project Manager",
      cy.get("#react-select-2-option-0")
    );
    cy.get("#react-select-2-option-0").click();
    employees.buttonVerification(
      "Delete",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)").click();
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/employees/all"
    );
  });
  it("Verify if the user can cancel assigning new role", () => {
    cy.get(
      ':nth-child(3) > :nth-child(6) > .Users_allEmployeesButtonsAction__0Hzkm > [aria-label="Add role"]'
    )
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get("#parent-modal-title")
      .should("be.visible")
      .should("have.text", "Assign new role");
    cy.get("#react-select-2-placeholder").click();

    employees.buttonVerification(
      "Cancel",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)").click();
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/employees/all"
    );
  });
  it("Verify if the table bar has Nr. Crt., first name, last name, email, role and action elements ", () => {
    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(1)")
      .should("be.visible")
      .should("have.text", "Nr. crt.");

    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(2)")
      .should("be.visible")
      .should("have.text", "First Name");
    cy.get(":nth-child(3) > .MuiButtonBase-root")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(3)")
      .should("be.visible")
      .should("have.text", "Last Name");
    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(6)")
      .should("be.visible")
      .should("have.text", "Actions");

    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(5)")
      .should("be.visible")
      .should("have.text", "Roles");

    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(4)")
      .should("be.visible")
      .should("have.text", "Email");
  });
});
