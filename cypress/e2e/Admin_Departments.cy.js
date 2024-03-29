import POM from "./POM";
const departments = new POM();
describe("Admin Departments", () => {
  beforeEach("Login", () => {
    cy.login();
    cy.Departments();
  });

  it("Verify if the user can add a new department", () => {
    departments.buttonVerification(
      "Add Department",
      cy.get(".Button_button__JBBzO")
    );

    cy.get(".Button_button__JBBzO")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.wait(1000);
    cy.get("#parent-modal-title")
      .should("be.visible")
      .should("have.text", "Add new department");

    cy.get("#departmentName").type("Front-End");
    departments.inputVerification("Front-End", cy.get("#departmentName"));

    departments.buttonVerification(
      "Confirm",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)").click();
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/departments/admin/all"
    );
  });
  it("Verify if the user can cancel adding a new department", () => {
    departments.buttonVerification(
      "Add department",
      cy.get(".Button_button__JBBzO")
    );

    cy.get(".Button_button__JBBzO")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get("#parent-modal-title")
      .should("be.visible")
      .should("have.text", "Add new department");
    departments.buttonVerification(
      "Cancel",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)").click();
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/departments/admin/all"
    );
  });
  it("Verify if the user can cancel assigning a department manager", () => {
    cy.get(":nth-child(1) > :nth-child(3) > .MuiButtonBase-root")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get("#parent-modal-title")
      .should("be.visible")
      .should("have.text", "Add new manager");
    // //cy.get("#parent-modal-description > .Button_button__JBBzO > span").click();
    cy.get(".css-12lx417-indicatorContainer").click();
    cy.get("#react-select-2-option-0").click();
    departments.buttonVerification(
      "Cancel",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)").click();
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/departments/admin/all"
    );
  });

  it("Verify if the user can assign a department manager", () => {
    cy.get(":nth-child(1) > :nth-child(3) > .MuiButtonBase-root")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get("#parent-modal-title")
      .should("be.visible")
      .should("have.text", "Add new manager");
    cy.get(".css-12lx417-indicatorContainer").click();
    cy.get("#react-select-2-option-0").click();
    departments.buttonVerification(
      "Confirm",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)").click();
    cy.wait(2000);
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/departments/admin/all"
    );
  });

  it("Verify if the user can cancel updating a department manager", () => {
    cy.get(":nth-child(1) > :nth-child(4) > .MuiButtonBase-root")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get("#parent-modal-title").should("be.visible");
    // .should("have.text", "Update");
    // cy.get(".css-12lx417-indicatorContainer").click();
    // cy.get("#react-select-2-option-0").click();
    departments.buttonVerification(
      "Cancel",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)").click();
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/departments/admin/all"
    );
  });

  // it("Verify if the user can update a department manager", () => {
  //   cy.get(":nth-child(1) > :nth-child(4) > .MuiButtonBase-root")
  //     .scrollIntoView()
  //     .should("be.visible")
  //     .click();
  //   cy.get("#parent-modal-title").should("be.visible");
  //   // .should("have.text", "Update");
  //   cy.get(".css-12lx417-indicatorContainer").click();
  //   cy.get("#react-select-2-option-0").click();
  //   departments.buttonVerification(
  //     "Confirm",
  //     cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)")
  //   );
  //   cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)").click();
  //   cy.url().should(
  //     "eq",
  //     "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/departments/admin/all"
  //   );
  // });
  it("Verify if the user can remove a department manager", () => {
    cy.get(":nth-child(1) > :nth-child(4) > .MuiButtonBase-root")
      .scrollIntoView()
      .should("be.visible")
      .click();

    cy.get("#parent-modal-title").should("be.visible");
    // .should("have.text", "Update [fdas]");
    cy.get(
      "#parent-modal-description > div:nth-child(2) > input[type=checkbox]"
    )
      .scrollIntoView()
      .should("be.visible")
      .click();

    departments.buttonVerification(
      "Confirm",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)").click();
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/departments/admin/all"
    );
  });

  // it("Verify if the user can cancel removing a department manager", () => {
  //   cy.get(":nth-child(1) > :nth-child(4) > .MuiButtonBase-root")
  //     .scrollIntoView()
  //     .should("be.visible")
  //     .click();
  //   cy.get("#parent-modal-title").should("be.visible");
  //   // .should("have.text", "Update");
  //   // cy.get(":nth-child(5) > input");
  //   departments.buttonVerification(
  //     "Cancel",
  //     cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)")
  //   );
  //   cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)").click();
  //   cy.url().should(
  //     "eq",
  //     "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/departments/admin/all"
  //   );
  // });

  it("Verify if the user can cancel deleting a department", () => {
    cy.get(
      ".MuiTableBody-root > :nth-child(1) > :nth-child(5) > .MuiButtonBase-root"
    )
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get("#parent-modal-title").should("be.visible");
    // .should("have.text", "Delete");
    departments.buttonVerification(
      "Cancel",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(1)").click();
  });

  it("Verify if the user can delete a department", () => {
    cy.get(
      ".MuiTableBody-root > :nth-child(1) > :nth-child(5) > .MuiButtonBase-root"
    )
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get("#parent-modal-title").should("be.visible");
    // .should("have.text", "Delete");
    departments.buttonVerification(
      "Delete",
      cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)")
    );
    cy.get(".Modal_modalButtons__fNdfv > :nth-child(2)").click();
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/departments/admin/all"
    );
  });
});
