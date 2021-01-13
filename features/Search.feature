Feature: Search BDD

  Scenario Outline: I perform various types of search using BDD approach
    Given I goto CV library url in the Browser
    When I Click More Search Option Link
    Then I see additional search options
    When I Enter the search criteria below "<keywords>", "<location>", "<salarymin>", "<salarymax>", "<jobtype>"
    Then I see the search results
    Examples:
    |keywords            |location|salarymin|salarymax|jobtype  |
    |Automation Tester   | RG1    | 20000   | 30000   | Contract |
    |Teacher             | SW1    | 10000   | 40000   | Part Time |
    |                    | SW1    | 20000   | 30000   | Part Time |
    |Full Stack Developer|        | 20000   |         | Contract  |

