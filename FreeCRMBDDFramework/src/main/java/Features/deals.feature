Feature: Deals data creation 

Scenario: Free CRM Create a new deal scenario 

	Given User is already on Login page 
	When title of Login page is Free CRM 
	Then User enter username and password 
		|debomalya|debo@123|
	Then User clicks on login Button 
	Then user is on HomePage 
	Then User move to new deal page 
	Then user enters deal details 
		|testdeal|1000|50|10|
	Then close the browser 
