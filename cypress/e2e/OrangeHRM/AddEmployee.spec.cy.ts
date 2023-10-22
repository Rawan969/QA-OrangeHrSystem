import LoginPage from "../../support/pageObject/LoginPage";
import Employee from "../../support/pageObject/Employee";
import EmployeeHelper from "../../support/helpers/addEmployeeHelper";
import {username,password} from "../../support/init/EmployeeInit"
const loginObj: LoginPage = new LoginPage();
const EmployeeObj: Employee =new Employee();


describe("Add new employee And trying to login with it", () =>{
    beforeEach(() =>{
        cy.visit("/web/index.php/auth/login");
        cy.fixture("LoginAdmin").as("user");
        cy.get("@user").then((userLogin: any) => {
        loginObj.userLogin(userLogin[0].username, userLogin[0].password);
      })
    })

    it("Add new employee", () =>{
        EmployeeHelper.addNewEmployee();
        EmployeeObj.logout();
        EmployeeObj.login(username,password);
    })
})