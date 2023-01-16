Feature: Verify Blaze page login validation
Application Regression

Scenario: Verify successfull Login
Given I open DemoBlaze page
When I enter correct login credentials
|user |password|
|jjmoncada| 12345|
|jjmoncada| 12345|

Then submit the information and validate welcome message
