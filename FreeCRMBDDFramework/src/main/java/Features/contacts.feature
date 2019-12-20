Feature: Free CRM Create Contacts

Scenario Outline: Free CRM Create A New Contact Scenario

Given User is already on Login page
When title of Login page is Free CRM
Then User enter "<username>" and "<password>"
Then User clicks on login Button
Then user is on HomePage
Then User move to new contact page
Then user enters "<firstname>" and "<lastname>" and "<position>"
Then close the browser

Examples:
	|username |password|firstname|lastname|position|
	|debomalya|debo@123|Cristiano|Ronaldo |Player  |
	|debomalya|debo@123|Zinidine |Zidan   |Manager |
	|debomalya|debo@123|Leonel   |Messi   |Player  |


