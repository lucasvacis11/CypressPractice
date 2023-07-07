class Navigation {

  getThemeButton = () => cy.get('[ng-reflect-status="primary"]')

  getThemeOptions = () => {
    const themeOptions = cy.get('[class="options-list"]')
    return {
      findLight: () => themeOptions.find('[ng-reflect-value="default"]'),
      findDark: () => themeOptions.find('[ng-reflect-value="dark"]'),
      findCosmic: () => themeOptions.find('[ng-reflect-value="cosmic"]'),
      findCorporate: () => themeOptions.find('[ng-reflect-value="corporate"]')
    }
  }

  getNavigationGlobalNav = () => cy.get('nb-layout-header.fixed > .fixed')

}

export default Navigation
