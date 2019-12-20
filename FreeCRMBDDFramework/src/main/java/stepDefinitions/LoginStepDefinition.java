package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
	
	WebDriver driver;

	@Given("^User is already on Login page$")
	public void user_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "E:\\Projects\\eclipse-workspace\\FreeCRMBDDFramework\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://classic.crmpro.com/index.html");
				
	}
	
	@When("^title of Login page is Free CRM$")
	public void title_of_Login_page_is_Free_CRM() {
	   String title =driver.getTitle() ;
	   System.out.println(title);
	   Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
	   
	}
	// Regular expression 
	// 1.\"(.*)\"

	@Then("^User enter \"(.*)\" and \"(.*)\"$")
	public void user_enter_username_and_Password(String username, String Password) {
		
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(Password);   
	}

	@Then("^User clicks on login Button$")
	public void user_clicks_on_login_Button() {
		
		WebElement loginbtn = driver.findElement(By.xpath("//input[@class='btn btn-small']"));
		JavascriptExecutor js =(JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginbtn);
	}

	@Then("^user is on HomePage$")
	public void user_is_on_HomePage() {
	  String title = driver.getTitle();
	  System.out.println("Home Page title : "+title);
	  Assert.assertEquals("CRMPRO", title);
	}
	
	@Then("^User move to new contact page$")
	public void user_move_to_new_contact_page() {
		driver.switchTo().frame("mainpanel");
		Actions actions =new Actions(driver);
		actions.moveToElement(driver.findElement(By.xpath("//a[@title='Contacts']"))).build().perform();
		driver.findElement(By.xpath("//a[@title='New Contact']")).click();
		System.out.println("Current page Title : "+driver.getTitle());
	    
	}
	
	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_details(String firstname, String lastname, String position) {
		driver.findElement(By.id("first_name")).sendKeys(firstname);
		driver.findElement(By.id("surname")).sendKeys(lastname);
		driver.findElement(By.id("company_position")).sendKeys(position);
		driver.findElement(By.xpath("//*[@id=\"contactForm\"]/table/tbody/tr[1]/td/input[2]")).click();
	  
	}
	
	@Then("^close the browser$")
	public void close_the_browser() {
		driver.quit();
	}
	
	

}
