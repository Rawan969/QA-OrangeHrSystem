import leaveInit from "../init/leaveInit";
import { empId } from "../helpers/addEmployeeHelper";
import { approveLeaveRequestPayload } from "../API/payload/approveLeaveRequestPayload";
const baseUrl = Cypress.config().baseUrl;
export let leaveTypeId: number;
let leaveRequestId: number;
export const URLs = {
  addEntitlements: `${baseUrl}/web/index.php/api/v2/leave/leave-entitlements`,
  applyLeave: `${baseUrl}/web/index.php/api/v2/leave/leave-requests`,
  approveLeave: `${baseUrl}/web/index.php/api/v2/leave/employees/leave-requests`,
};
export default class leave {
  static async addEntitlements() {
    await new Cypress.Promise((resolve, reject) => {
      cy.addEntitlements(
        "POST",
        URLs.addEntitlements,
        leaveInit.initAddEntitlements(empId)
      ).then((response) => {
        leaveTypeId = response.data.leaveType.id;
        resolve(leaveTypeId);
      });
    });
  }
  static async applyLeaveRequest() {
    await new Cypress.Promise((resolve, reject) => {
      cy.applyLeave("POST", URLs.applyLeave, leaveInit.initApply()).then(
        (response) => {
          leaveRequestId = response.data.id;
          resolve(leaveRequestId);
        }
      );
    });
  }
  static async approveLeaveRequest() {
    await new Cypress.Promise((resolve, reject) => {
      cy.approveLeave(
        "PUT",
        `${URLs.approveLeave}/${leaveRequestId}`,
        leaveInit.action()
      );
    });
  }
}
