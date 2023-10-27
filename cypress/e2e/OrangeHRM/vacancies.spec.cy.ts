import LoginPage from "../../support/pageObject/LoginPage";
import GenericHelper from "../../support/helpers/genericFunctions"
import AddVacancy from "../../support/pageObject/addVacancyPage";
import EditVacancy from "../../support/pageObject/editVacancyPage";
import UploadFile from "../../support/pageObject/uploadFilePage";

const loginObj: LoginPage = new LoginPage();

let VacancyName=`test${GenericHelper.genericRandomString()}`;
const pathFile='cypress/fixtures/testtt.txt';
let fileName = pathFile.lastIndexOf('/');
const dataToAssert1 = [{ key: 'Vacancy', value: VacancyName } ];
const dataToAssert2 = [{ key: 'File Name', value: pathFile.slice(fileName+1) } ];


describe("Add new vacancy with file upload ", () => {
    beforeEach(() =>{
        cy.visit("/web/index.php/auth/login");
        cy.fixture("LoginAdmin").as("user");
        cy.get("@user").then((userLogin: any) => {
        loginObj.userLogin(userLogin[0].username, userLogin[0].password);
      })
    })

    it("Add vacancy",()=>{
        AddVacancy.addVacancy(VacancyName);
        EditVacancy.assertionFun(dataToAssert1);
        UploadFile.addFile(pathFile);
        EditVacancy.assertionFun(dataToAssert2);
    })
})