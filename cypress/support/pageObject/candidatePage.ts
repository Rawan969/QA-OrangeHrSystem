 class recruitment{
    elements = {
        mainMenuItems: () => cy.get(".oxd-sidepanel-body"),
        table: () => cy.get(".oxd-table-body > .oxd-table-card"),
        addBtn: () => cy.get(".orangehrm-header-container > .oxd-button"),
    }
    openCandidatePage(){
        this.elements.mainMenuItems().contains("Recruitment").click();
    }
    interceptApi(){
       return cy.intercept("get","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates?**");
    }
    verifyRecruitmentLength(length:Number){
        this.elements.table().should("have.length",length);
    }
    AddApi(){
        this.elements.addBtn().click();
    }
}
export default recruitment;