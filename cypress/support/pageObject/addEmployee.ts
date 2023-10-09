class addEmployee {
  elements = {
    MainMenuItems: () => cy.get(".oxd-sidepanel-body"),
    addEmp: () => cy.get(".oxd-button--secondary"),
    EmployeeInputName: () => cy.get(".--name-grouped-field"),
    createLoginDetails: () => cy.get('input[type="checkbox"]'),
    userName: () => cy.get(".oxd-input"),
    password: () => cy.get('input[type="password"]'),
    saveNewEmp: () => cy.get('button[type="submit"]'),
  };

  addNewEmployee(
    firstName: string,
    MiddleName: string,
    LastName: string,
    userName: string,
    password: string,
    confirmPassword: string
  ) {
    this.elements.MainMenuItems().contains("PIM").click();
    this.elements.addEmp().eq(1).click();
    this.elements.EmployeeInputName().children().eq(0).type(firstName);
    this.elements.EmployeeInputName().children().eq(1).type(MiddleName);
    this.elements.EmployeeInputName().children().eq(2).type(LastName);

    this.elements.createLoginDetails().click({ force: true });
    this.elements.userName().eq(5).type(userName);
    this.elements.password().eq(0).type(password);
    this.elements.password().eq(1).type(confirmPassword);
    this.elements.saveNewEmp().click();
  }
}
export default addEmployee;
