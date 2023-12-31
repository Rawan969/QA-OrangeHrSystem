class Employee{
    elements={
        userName:()=>cy.get('[placeholder="Username"]'),
        password: () => cy.get('[placeholder="Password"]'),
        loginBtn: () => cy.get("button"),
        logoutDropDown: () => cy.get(".oxd-userdropdown-tab"),
        logoutBtn: () => cy.contains("Logout"),
    }
    login(userName:string, password:string){
        this.elements.userName().type(userName);
        this.elements.password().type(password);
        this.elements.loginBtn().click({force: true});
    }
    logout(){
        this.elements.logoutDropDown().click();
        this.elements.logoutBtn().click();
    }
}
export default Employee;