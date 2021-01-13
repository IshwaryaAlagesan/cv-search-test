Feature('search');

Scenario('test something', (I) => {
    I.amOnPage("/");
    I.click("//button[@id='toggle-hp-search']")
    I.fillField("#keywords", "Automation Tester")
    I.fillField("#location", "RG1")
    I.wait(1);
    I.fillField("#salarymin", "40000")
    I.fillField("#salarymax", "50000")
    I.wait(1)
    I.selectOption("#tempperm", "Contract")
    I.click("#hp-search-btn")
    I.waitForText("Results Per Page:", 5);
});
