const { I } = inject();
// Add in your custom step files

Given('I goto CV library url in the Browser', () => {
  I.amOnPage("/");
});


When('I Click More Search Option Link', () =>{
  I.click("//button[@id='toggle-hp-search']")
});

Then('I see additional search options', () =>{
  I.waitForText("Salary Min", 5)
  I.see("Salary Max");
  I.see("Salary Type")
  I.see("Job Type")
});

When('I Enter the search criteria below {string}, {string}, {string}, {string}, {string}', (keywords, location, salarymin, salarymax, jobtype) =>{
  I.fillField("#keywords", keywords)
  I.fillField("#location", location)
  I.wait(1);
  I.fillField("#salarymin", salarymin)
  I.fillField("#salarymax", salarymax)
  I.wait(1)
  I.selectOption("#tempperm", jobtype)
  I.click("#hp-search-btn")

});

Then('I see the search results', () =>{
  I.waitForText("Results Per Page:", 5);
})
