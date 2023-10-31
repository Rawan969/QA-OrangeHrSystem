export default class BuzzTab {
    static elements = {
        inputfield: () => cy.get('.oxd-buzz-post-input'),
        postBtn: () => cy.get('[type=submit]'),
        confirmContent: () => cy.get(".oxd-text.oxd-text--p.orangehrm-buzz-post-body-text")
    }

    static addNewPost(postData: string) {
        this.elements.inputfield().type(postData);
        this.elements.postBtn().click();
        
      }

    static checkPost(postData:string) {
            this.elements.confirmContent().should('contain', postData)
    }

}