import timesheetInit from "../init/timesheetInit";
const baseUrl = Cypress.config().baseUrl;
export let timeId: any;
export const URLs = {
  getTimesheetId: `${baseUrl}/web/index.php/api/v2/time/timesheets/default?date=2023-10-30`,
  //editTimesheet:`${baseUrl}/web/index.php/api/v2/time/timesheets/${timeId}/entries`,
  //addTimesheet:`${baseUrl}/web/index.php/api/v2/time/timesheets/${timeId}/entries`,
  //submitTimesheet:`${baseUrl}/web/index.php/api/v2/time/timesheets/${timeId}`
};
export default class Timesheet {
  static async timesheetId() {
    await new Cypress.Promise((resolve, reject) => {
        cy.timesheetId(
            "GET",
            URLs.getTimesheetId,
            ''
          ).then((response) => {
            timeId = response.data.id;
            resolve(timeId);
          });
          
    });
    //console.log(timeId)
  }

  static editTimesheetId() {
    cy.EditAddTimesheet(
      "GET",
      `${baseUrl}/web/index.php/api/v2/time/timesheets/${timeId}/entries`,
      timesheetInit.editTimeSheetInit(timeId)
    )
    //console.log(timeId)
}
 static addTimesheet() {
    cy.EditAddTimesheet(
      "PUT",
      `${baseUrl}/web/index.php/api/v2/time/timesheets/${timeId}/entries`,
      timesheetInit.addTimeSheetInit()
    )
    //cy.wait(7000);
}
static sumbitTimeSheet() {
    cy.EditAddTimesheet(
      "PUT",
      `${baseUrl}/web/index.php/api/v2/time/timesheets/${timeId}`,
      timesheetInit.submitTimeSheetInit()
    )
}

}
