import Navigation from "../support/pages/navigation.page"

describe ('Theme tests', () => {


  it('Change theme to Dark option', () => {
    cy.visit('/')
    const onNavigation = new Navigation()
    onNavigation.getThemeButton().click().then( button => {
      onNavigation.getThemeOptions().findDark().click()
      cy.wrap(button).should('contain', 'Dark')
      onNavigation.getNavigationGlobalNav().should('have.css', 'background-color', 'rgb(34, 43, 69)')
    })
  })


  it('Change theme to Cosmic option', () => {
    cy.visit('/')
    const onNavigation = new Navigation()
    onNavigation.getThemeButton().click().then( button => {
      onNavigation.getThemeOptions().findCosmic().click()
      cy.wrap(button).should('contain', 'Cosmic')
      onNavigation.getNavigationGlobalNav().should('have.css', 'background-color', 'rgb(50, 50, 89)')
    })
  })

  it('Change theme to Corporate option', () => {
    cy.visit('/')
    const onNavigation = new Navigation()
    onNavigation.getThemeButton().click().then( button => {
      onNavigation.getThemeOptions().findCorporate().click()
      cy.wrap(button).should('contain', 'Corporate')
      onNavigation.getNavigationGlobalNav().should('have.css', 'background-color', 'rgb(255, 255, 255)')
    })
  })

  it('Change theme to Light option', () => {
    cy.visit('/')
    const onNavigation = new Navigation()
    onNavigation.getThemeButton().click().then( button => {
      onNavigation.getThemeOptions().findLight().click()
      cy.wrap(button).should('contain', 'Light')
      onNavigation.getNavigationGlobalNav().should('have.css', 'background-color', 'rgb(255, 255, 255)')
    })
  })



})
