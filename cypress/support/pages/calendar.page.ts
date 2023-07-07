class Calendar {

  visit() {
    cy.visit('/pages/forms/datepicker')
  }

  getDatePicketInput = () => cy.get(':nth-child(1) > nb-card > nb-card-body > .size-medium')

  getMonthYearButton = () => cy.get('.appearance-filled')

  getDayCell = () => cy.get('nb-calendar-day-cell')

  getNextMonthButton = () => cy.get('[data-name="chevron-right"]')

}

export default Calendar
