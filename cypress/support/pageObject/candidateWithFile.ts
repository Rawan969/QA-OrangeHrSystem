class CandidateWithFile{
    static elements = {
        FirstLastName: () => cy.get('.--name-grouped-field'),
        email: () => cy.get('.oxd-input.oxd-input'),
        uploadedFile: () => cy.get('input[type="file"]'),
        saveBtn: () => cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space'),
        resumefile: () => cy.get('.oxd-text.oxd-text--p.orangehrm-file-name')
    }
    static AddCandidateWithFile(filePath: string){
        this.elements.FirstLastName().children().eq(0).type("test");
        this.elements.FirstLastName().children().eq(2).type("test22");
        this.elements.email().eq(4).type("test22@example.com");
        this.elements.uploadedFile().selectFile(filePath,{force:true});
        this.elements.saveBtn().click();
    }
    static AssertionFileTitle(filePath: string){
        let fileTitle = filePath.lastIndexOf('/');
        this.elements.resumefile().should('contain',filePath.slice(fileTitle+1));
    }
}
export default CandidateWithFile;