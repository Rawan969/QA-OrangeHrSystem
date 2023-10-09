import LoginPage from "../../support/pageObject/LoginPage";
import PIMtab from "../../support/pageObject/searchEmployeeTable";

const loginPage: LoginPage = new LoginPage();
const EmployeeTable: PIMtab = new PIMtab();

describe("test the admin tab", () => {
  beforeEach(() => {
    cy.visit("/web/index.php/auth/login");
    loginPage.userLogin("Admin", "admin123");
    EmployeeTable.selectPIM();
  });
  it("search by key-value Employee", () => {
    EmployeeTable.checkSearch([{ key: "Id", value: "0066" }]);
  });
});
