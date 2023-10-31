import LoginPage from "../../support/pageObject/LoginPage";
import EmployeeHelper from "../../support/helpers/addEmployeeHelper";
import Employee from "../../support/pageObject/Employee";
import Timesheet from "../../support/helpers/timesheetHelper";
import commonHelper from "../../support/helpers/commonHelper";
import { username, password ,firstName,lastName } from "../../support/init/EmployeeInit";

const loginObj: LoginPage = new LoginPage();
const EmployeeObj: Employee = new Employee();
let key: "Employee Name";

describe("Time-tab",()=>{
    beforeEach(() => {
        cy.visit("/web/index.php/auth/login");
        cy.fixture("LoginAdmin").as("user");
        cy.get("@user").then((userLogin: any) => {
          loginObj.userLogin(userLogin[0].username, userLogin[0].password);
        });
      });

    it("Time-Timesheet: the employee should be able to add a timesheet", () => {
      EmployeeHelper.addNewEmployee().then(() => {
        cy.then(() => {
          EmployeeObj.logout();
        })
          .then(() => {
            EmployeeObj.login(username, password);
          }).then(() => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewMyTimesheet')
          }).then(() => {
            Timesheet.timesheetId()
          }).then(() => {
            Timesheet.editTimesheetId();
          }).then(() => {
            Timesheet.addTimesheet();
          }).then(() => {
            Timesheet.sumbitTimeSheet();
          }).then(()=>{
            cy.then(()=>{
             EmployeeObj.logout();
            })
            .then(()=>{
             cy.get("@user").then((userLogin: any) => {
                 loginObj.userLogin(userLogin[0].username, userLogin[0].password);
               });
            })
         }).then(()=>{
             cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet');
         }).then(()=>{
          commonHelper.assertionFun([{ key: key,value:`${firstName} ${lastName}`}]);
         })
      })
    })
})
