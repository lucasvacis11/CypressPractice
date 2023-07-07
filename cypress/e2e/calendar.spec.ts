import Calendar from "../support/pages/calendar.page"

describe('Calendar tests', () => {

  it('First Test', () => {
    let date = new Date();
    date.setDate(date.getDate() + 5);
    let futureDay = date.getDate();
    let futureMonth = date.toLocaleString('default', {month: 'short'});

    const onDatePicker = new Calendar();
    onDatePicker.visit();
    onDatePicker.getDatePicketInput().then(input => {
      cy.wrap(input).click();
      onDatePicker.getMonthYearButton().invoke('attr', 'ng-reflect-date').then(dateAttr => {
        if(dateAttr && dateAttr.includes(futureMonth)) {
          onDatePicker.getNextMonthButton().click();
          onDatePicker.getDayCell().contains(futureDay).click();
        } else {
          onDatePicker.getDayCell().contains(futureDay).click();
        }
      });
    });
});

})
