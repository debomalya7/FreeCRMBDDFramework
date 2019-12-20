Feature: Deals data creation with map

Scenario: Free CRM Create a new deal scenario with map

	Given User is already on Login page 
	When title of Login page is Free CRM 
	Then User enter username and password 
		|username |password|
		|debomalya|debo@123|
	Then User clicks on login Button 
	Then user is on HomePage 
	Then User move to new deal page 
	Then user enters deal details 
		|title|amount|probability|commission|
		|Reebok|8000|50|70|
		|Adidas|5000|30|10|
		|Fila|seven|22|44|
		|Nike|7000|40|20|
		|Puma|6000|33|40|
		
	Then close the browser