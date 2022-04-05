Feature: To test the login functionality in Pomelo website

Background:
    Given the user is open Pomelo page
    And the user is on login page

Scenario: The one where user logs in using valid credentials
    When the user enters email as "<email>" and password as "<password>"
    And clicks on login button
    Then the user must see message Welcome "<first_name>"

Examples:
        | email                        | password     | first_name |
        | thihuyenguyen1205@gmail.com  | Pomelo123!   | Thi        |