Feature: New Company Creation 

Scenario: Free CRM Create a new company with Map 

	Given User is already on Login page 
	When title of Login page is Free CRM 
	Then User enter username and password 
		|username |password|
		|debomalya|debo@123|
	Then User clicks on login Button 
	Then user is on HomePage 
	Then User move to New Company page 
	Then User enter company details 
		|Company  |Employees|City |Country |Phone     |
		|ORACLE   |25000    |HYD  |IND     |9785649878|
		|HARMAN   |20000    |BLR  |IND     |8056784567|
		|ACCENTURE|30000    |BLR  |IND     |8076549567|
	Then close the browser