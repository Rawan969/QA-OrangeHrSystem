import LoginPage from "../../support/pageObject/LoginPage";
import addEmployee from "../../support/pageObject/addEmployee";
const loginObj: LoginPage = new LoginPage();
const addEmp: addEmployee = new addEmployee();

describe("Employee functionality", () => {
  beforeEach(() => {
    cy.visit("/web/index.php/auth/login");
    loginObj.userLogin("Admin", "admin123");
    cy.fixture("employeeInfo").as("EmpInfo");
  });

  it("Add new employee via ui", () => {
    cy.get("@EmpInfo").then((infoData: any) => {
      addEmp.addNewEmployee(
        infoData.FirstName,
        infoData.MiddleName,
        infoData.LastName,
        infoData.UserName,
        infoData.password,
        infoData.confirmPassword
      );
    });
  });
});
