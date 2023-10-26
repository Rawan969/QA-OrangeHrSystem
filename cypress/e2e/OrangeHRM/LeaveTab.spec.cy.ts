import LoginPage from "../../support/pageObject/LoginPage";
import EmployeeHelper from "../../support/helpers/addEmployeeHelper";
import Employee from "../../support/pageObject/Employee";
import leaveHelper from "../../support/helpers/leaveHelper";
import LeavePage from "../../support/pageObject/leavePage";
import { username, password } from "../../support/init/EmployeeInit";

const EmployeeObj: Employee = new Employee();
const loginObj: LoginPage = new LoginPage();
const leavePage: LeavePage = new LeavePage();

describe("Leave Table", () => {
  beforeEach(() => {
    cy.visit("/web/index.php/auth/login");
    cy.fixture("LoginAdmin").as("user");
    cy.get("@user").then((userLogin: any) => {
      loginObj.userLogin(userLogin[0].username, userLogin[0].password);
    });
  });
  it("Add Employee , Employee applies for leave , Admin approves, employee checks the status", () => {
    //addEmployee
    EmployeeHelper.addNewEmployee()
      .then(() => {
        //add Entitlements
        leaveHelper.addEntitlements();
      }) //login as employee and apply leave
      .then(() => {
        cy.then(() => {
          EmployeeObj.logout();
        })
          .then(() => {
            EmployeeObj.login(username, password);
          })
          .then(() => {
            leaveHelper.applyLeaveRequest();
          });
      })
      .then(() => {
        cy.then(() => {
          EmployeeObj.logout();
        })
          .then(() => {
            cy.fixture("LoginAdmin").as("user");
            cy.get("@user").then((userLogin: any) => {
              loginObj.userLogin(userLogin[0].username, userLogin[0].password);
            });
          })
          .then(() => {
            leaveHelper.approveLeaveRequest();
          });
      }) //Login as employee and check the leave status
      .then(() => {
        cy.then(() => {
          EmployeeObj.logout();
        })
          .then(() => {
            EmployeeObj.login(username, password);
          })
          .then(() => {
            leavePage.open()
            leavePage.assertionFun([{ key: "Status", value: "Scheduled" }]);
          });
      });
  });
});
