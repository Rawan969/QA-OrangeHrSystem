class PersonalDetails {
  elements = {
    Employee_first_name: () =>
      cy.get(
        ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
      ),
    Employee_last_name: () =>
      cy.get(":nth-child(3) > :nth-child(2) > .oxd-input"),
    NickName: () =>
      cy.get(
        ":nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    Employee_id: () =>
      cy.get(
        ":nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    other_id: () =>
      cy.get(
        ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    driver_license: () =>
      cy.get(
        ":nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    license_Expire_Date: () =>
      cy.get(
        ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
      ),
    date: () =>
      cy.get(
        ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
      ),
    Select_date: () =>
      cy.get(
        ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon"
      ),
    SSN_number: () =>
      cy.get(
        ":nth-child(3) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    SIN_number: () =>
      cy.get(
        ":nth-child(3) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    nationality: () =>
      cy.get(
        ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input"
      ),
    nationalityOptions: () =>
      cy.get(
        ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
      ),
    Marital_status: () =>
      cy.get(
        ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input"
      ),
    MaritalStatusOptions: () =>
      cy.get(
        ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after"
      ),
    Date_of_birth: () =>
      cy.get(
        ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
      ),
    DateOfBirthOptions: () =>
      cy.get(
        ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon"
      ),
    gender: () => cy.get("[type:'radio']"),
    Military_service: () =>
      cy.get(
        ":nth-child(7) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    smoker: () => cy.get("[type:'checkbox']"),
    saveBtn: () =>
      cy.get(":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button"),
  };
  personalInfo(
    Employee_first_name: string,
    Employee_last_name: string,
    NickName: string,
    other_id: string
  ) {
    this.elements.Employee_first_name().type(Employee_first_name);
    this.elements.Employee_last_name().type(Employee_last_name);
    this.elements.NickName().type(NickName);
    this.elements.Employee_id().type(other_id);
    this.elements.saveBtn().click();
  }
}
export default PersonalDetails;
