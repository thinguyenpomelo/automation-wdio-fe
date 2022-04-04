Feature: To test the login functionality in Pomelo website

Background:
    Given the user is on login page

Scenario: The one where user logs in using valid credentials
    When the user enters username as "thihuyenguyen1205@gmail.com" and password as "Pomelo123#"
    And clicks on login button
    #Then the user must see message "Welcome"