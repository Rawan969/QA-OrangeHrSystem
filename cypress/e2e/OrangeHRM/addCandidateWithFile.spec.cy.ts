import LoginPage from "../../support/pageObject/LoginPage";
import CandidateWithFile from "../../support/pageObject/candidateWithFile";
const loginObj: LoginPage = new LoginPage();

describe("Add new candidate", () =>{
    beforeEach(() =>{
        cy.visit("/web/index.php/auth/login");
        cy.fixture("LoginAdmin").as("user");
        cy.get("@user").then((userLogin: any) => {
        loginObj.userLogin(userLogin[0].username, userLogin[0].password);
      })
    })
    it("Add new candidate with File", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate");
        CandidateWithFile.AddCandidateWithFile('cypress/fixtures/test.txt');
        CandidateWithFile.AssertionFileTitle('cypress/fixtures/test.txt');
    })
})