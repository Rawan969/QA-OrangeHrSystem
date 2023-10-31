import LoginPage from "../../support/pageObject/LoginPage";
import BuzzTab from "../../support/pageObject/buzzPage";

const loginObj: LoginPage = new LoginPage();
let postPath:string='cypress/fixtures/post.json'

describe("Buzz Tab", () => {
    beforeEach(() => {
        cy.visit("/web/index.php/auth/login");
        cy.fixture("LoginAdmin").as("user");
        cy.get("@user").then((userLogin: any) => {
          loginObj.userLogin(userLogin[0].username, userLogin[0].password);
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz')
      });

      it("Buzz - The user should be able to add a post",()=>{
        cy.writeFile(postPath, {
            content: "Hello world",
          });
        cy.fixture("post.json").then((postData) => {
            BuzzTab.addNewPost(postData.content);
            BuzzTab.checkPost(postData.content);
        })
      })
})