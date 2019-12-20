Feature: Free CRM Login Feature

#Scenario: Free CRM Login Test Scenario
#
#Given User is already on Login page
#When title of Login page is Free CRM
#Then User enter "debomalya" and "debo@123"
#Then User clicks on login Button
#And user is on HomePage


Scenario Outline: Free CRM Login Test Scenario

Given User is already on Login page
When title of Login page is Free CRM
Then User enter "<username>" and "<password>"
Then User clicks on login Button
Then user is on HomePage
Then close the browser


Examples:
	| username  | password |
	| debomalya | debo@123 |
	| tom       | tom@123  |

