import { wrap } from "cypress/types/lodash"
import Forms from "../support/pages/forms-page"

describe ('Forms test suite', () => {

  it('Verify checkbox functionality', () => {
    const onFormsPage = new Forms
    onFormsPage.visit()
    onFormsPage.getCheckboxes().then( radioButtons => {
      cy.wrap(radioButtons).first().check({force:true}).should('be.checked')
    })

  })






})
