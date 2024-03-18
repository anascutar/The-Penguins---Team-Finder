import POM from "./POM";
const uuid = () => Cypress._.random(0, 1e6);
const id = uuid();
const registerpage = new POM();
const navbar = new POM();
const testemail = `testname${id}@penguins.com`;
describe("Admin Navbar", () => {
  beforeEach("Login", () => {
    cy.login();
  });

  // registerpage.buttonVerification("Sign Up", cy.get(".Button_button__JBBzO"));
  // cy.get(".Button_button__JBBzO").click();
  // cy.wait(5000);
  // cy.url().should(
  //   "eq",
  //   "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/login"
  // );
  it("Verify if the user can minimize the navbar", () => {
    cy.get(
      " #root > div > div.SidebarNavigation_sidebar__D0Qg2.undefined > div.SidebarNavigation_headerSideBar__tIbib > div > button > svg"
    ).click();
    cy.wait(1000);
    cy.get(
      " #root > div > div.SidebarNavigation_sidebar__D0Qg2.SidebarNavigation_closed__jPeMA > div.SidebarNavigation_headerSideBar__tIbib > div > button > svg"
    ).click();
  });
  it("Verify if the user can acces the profile page", () => {
    navbar.buttonVerification(
      "Profile",
      cy.get(".SidebarNavigation_profileContainer__2xCPL")
    );
    cy.get(".SidebarNavigation_profileContainer__2xCPL").click();
    cy.wait(2000);
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/profile/info"
    );
  });

  it("Verify if the user can acces the team roles page", () => {
    navbar.buttonVerification("Team Roles", cy.get('[href="/team-roles"]'));
    cy.get('[href="/team-roles"]').click();
    cy.wait(2000);
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/team-roles"
    );
  });

  it("Verify if the user can acces the departments page", () => {
    navbar.buttonVerification(
      "Departments",
      cy.get('[href="/departments/admin/all"]')
    );
    cy.get('[href="/departments/admin/all"]').click();

    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/departments/admin/all"
    );
  });

  it("Verify if the user can acces the projects page", () => {
    navbar.buttonVerification("Projects", cy.get('[href="/projects"]'));
    cy.get('[href="/projects"]').click();
    cy.wait(2000);
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/projects"
    );
  });

  it("Verify if the user can acces the employees page", () => {
    navbar.buttonVerification("Employees", cy.get('[href="/employees/all"]'));
    cy.get('[href="/employees/all"]').click();
    cy.wait(2000);
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/employees/all"
    );
  });

  it("Verify if the user can acces the notifications page", () => {
    navbar.buttonVerification(
      "Notifications",
      cy.get('[href="/notifications"]')
    );
    cy.get('[href="/notifications"]').click();
    cy.wait(2000);
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/notifications"
    );
  });
  it("Verify if the user can logout from the acoount", () => {
    navbar.buttonVerification(
      "Logout",
      cy.get(".SidebarNavigation_bottomSideBar__9EiH3")
    );
    cy.get(".SidebarNavigation_bottomSideBar__9EiH3").click();
    cy.wait(2000);
    cy.url().should(
      "eq",
      "https://atc-2024-thepenguins-fe-linux-web-app.azurewebsites.net/login"
    );
  });
});
