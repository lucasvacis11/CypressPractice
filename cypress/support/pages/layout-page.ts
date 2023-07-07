class LayoutPage {

  visit() {
    cy.visit('/pages/layout/stepper')
  }

  getFirstStepLabelBoxOne() {
    return cy.get('.col-lg-12 > nb-card-body > .horizontal > .header > .selected > .label')
  }

  getSecondStepLabelBoxOne() {
    return cy.get('.col-lg-12 > nb-card-body > .horizontal > .header > :nth-child(3) > .label')
  }

  getThirdStepLabelBoxOne() {
    return cy.get('.col-lg-12 > nb-card-body > .horizontal > .header > :nth-child(5) > .label > .ng-star-inserted')
  }

  getForthStepLabelBoxOne() {
    return cy.get('.horizontal > .header > :nth-child(7) > .label')
  }

  getFirstNumberIncompletedBoxOne(){
    return cy.get('.col-lg-12 > nb-card-body > .horizontal > .header > .selected')
  }

  getFirstNumberCompletedBoxOne(){
    return cy.get('.col-lg-12 > nb-card-body > .horizontal > .header > .completed')
  }

  getNextButtonBoxOne() {
    return cy.get('.horizontal > .step-content > [aria-disabled="false"]')
  }



}

export default LayoutPage;
