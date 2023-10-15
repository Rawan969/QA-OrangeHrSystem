import LoginPage from "../../support/pageObject/LoginPage";
import recruitment from "../../support/pageObject/candidatePage";
import addCandidate from "../../support/helpers/addCandidateHelper";
const recruitmentObj: recruitment = new recruitment();
const loginObj: LoginPage = new LoginPage();


let id : string;
describe("candidate tab", () => {
    beforeEach(() => {
    cy.visit("/web/index.php/auth/login");
    cy.fixture("LoginAdmin").as("user");
    cy.get("@user").then((userLogin: any) => {
        loginObj.userLogin(userLogin[0].username, userLogin[0].password);
      })
      recruitmentObj.openCandidatePage();
      cy.fixture("addCandidate").as("add");
  });
////check Number Of Records
  it("Recruitment: candidate page-checkNumberOfRecords", ()=>{
    recruitmentObj.interceptApi().as('apiRequest');
    cy.wait("@apiRequest").then((Interception)=>{
        const length = Interception.response?.body.meta.total;
        recruitmentObj.verifyRecruitmentLength(length);
    })
  })
   ///add new candidate
    it.only("Recruitment: candidate page-Add new candidate",()=>{
      //recruitmentObj.AddApi();
      addCandidate.addNewCandidateViaAPI().then((resolve)=>{
        id=`${resolve}`
        addCandidate.makeShortlisted(id)
        })
        addCandidate.makeScheduleInterview();
  })
})


