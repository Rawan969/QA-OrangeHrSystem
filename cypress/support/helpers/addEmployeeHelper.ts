import EmployeeInit from "../init/EmployeeInit";
const baseUrl = Cypress.config().baseUrl
export const URLs={
    employee:`${baseUrl}/web/index.php/api/v2/pim/employees`,
    user:`${baseUrl}/web/index.php/api/v2/admin/users`
}
export let empId :number;
export default class addEmployee{
static async addNewEmployee(){ 
    await new Cypress.Promise((resolve, reject) => {
        cy.addNewEmployee('POST', URLs.employee, EmployeeInit.initEmployee()).then((response) => {
            empId = response.data.empNumber;
            resolve(empId);
        });
    }).then(()=>{
        cy.addUser('POST', URLs.user, EmployeeInit.initUser(empId));
    })
}
}