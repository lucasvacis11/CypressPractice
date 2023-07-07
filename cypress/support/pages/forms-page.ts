class Forms {

  visit() {
    cy.visit('/pages/forms/layouts')
  }

  getEmailInputGrid = () => cy.get('[data-cy="imputEmail1"]')

  getPasswordInputGrid = () => cy.get('#inputPassword2')

  getCheckboxes = () => cy.contains('nb-card', 'Using the Grid').find('[type="radio"]')



}

export default Forms
