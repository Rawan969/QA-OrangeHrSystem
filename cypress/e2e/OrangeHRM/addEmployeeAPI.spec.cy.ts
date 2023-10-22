import loginPage from "../../support/pageObject/LoginPage";
import addEmployee from "../../support/pageObject/addEmployee";
import searchEmployee from "../../support/pageObject/searchEmployeeTable";
import personalDetails from "../../support/pageObject/personalDetails";
const addEmpObj: addEmployee = new addEmployee();
const loginObj: loginPage = new loginPage();
const searchObj: searchEmployee = new searchEmployee();
const personalObj: personalDetails = new personalDetails();

let firstName: string;
let lastName: string;
let Id: number;
let empId: string;
describe("ADD Employee && Personal Details", () => {
  beforeEach(function () {
    cy.visit("/");
    loginObj.userLogin("Admin", "admin123");
    cy.fixture("addEmployee").as("emp");
    cy.get("@emp").then((info: any) => {
      cy.request({
        method: "POST",
        url: "/web/index.php/api/v2/pim/employees",
        body: {
          firstName: info.firstName,
          middleName: info.MiddleName,
          lastName: info.LastName,
          employeeId: `${Math.round(10000 * Math.random())}`,
        },
      }).then((response) => {
        Id = response.body.data.empNumber;
        expect(response).property("status").to.equal(200);
      });
      cy.get("@emp").then((info: any) => {
        cy.request({
          method: "POST",
          url: "/web/index.php/api/v2/admin/users",
          body: {
            username: info.username,
            status: true,
            empNumber: Id,
            userRoleId: 2,
            password: info.password,
          },
        }).then((response) => {
          expect(response).property("status").to.equal(200);
        });
      });
    });
  });
  it("personal details", () => {
    cy.get("@emp").then((info: any) => {
      cy.request(
        `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/${Id}/personal-details`
      ).then((response) => {
        firstName = response.body.data.firstName;
        lastName = response.body.data.lastName;
        empId = response.body.data.employeeId;
        expect(response).property("status").to.equal(200);
      });
    });
    cy.get("@emp").then(() => {
      cy.visit(
        `https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/${Id}`
      ).then(() => {
        cy.get(".oxd-text.oxd-text--h6.--strong").should(
          "contain",
          `${firstName} ${lastName}`
        );
        personalObj.personalInfo("ahmad", "Asad", "teest", "005");
      });
    });
  });
});
afterEach(function () {
  cy.request({
    method: "DELETE",
    url: "/web/index.php/api/v2/admin/users",
    body: {
      ids: [Id],
    },
  }).then((response) => {
    console.log(Id);

    expect(response).property("status").to.equal(200);
  });
});
