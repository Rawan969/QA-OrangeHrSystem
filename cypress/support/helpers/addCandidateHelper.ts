import CandidateInit from "../init/candidateInit"
import scheduleInterview from "../pageObject/sechudleInterview";
const scheduleInterviewObj: scheduleInterview = new scheduleInterview()
const baseUrl = Cypress.config().baseUrl
let Id:number;

export const URLs={
    candidate:`${baseUrl}/web/index.php/api/v2/recruitment/candidates`
}
export default class addCandidate{
    static addNewCandidateViaAPI(){ 
        return new Cypress.Promise((resolve, reject) => {
            cy.addNewCandidate('POST', URLs.candidate,CandidateInit.initCandidate()).then((response) => {
                Id = response.data.id;
                resolve(Id)
            })
        })
    }
    static makeShortlisted(id: string) {
        cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${id}`)
        cy.addNewCandidate('PUT', `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${id}/shortlist`, CandidateInit.shortlistCandidate())
    }
    static makeScheduleInterview() {
        scheduleInterviewObj.scheduleInterviewDetails()
        scheduleInterviewObj.verifyStatus()
    }
}