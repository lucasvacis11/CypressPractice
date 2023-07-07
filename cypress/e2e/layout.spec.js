import LayoutPage from '../support/pages/layout-page'
describe('Layout Page smoke tests', () => {

  it('Mark steps as Done', () => {
    const onlayoutPage = new LayoutPage()
    onlayoutPage.visit()
    onlayoutPage.getFirstStepLabelBoxOne().invoke('text').then( text => {
      expect(text).to.equal('First step')
      cy.wrap(text).should('contain', 'step')
    })
    onlayoutPage.getFirstNumberIncompletedBoxOne()
    onlayoutPage.getNextButtonBoxOne().click()
    onlayoutPage.getFirstNumberCompletedBoxOne()

  })





})
