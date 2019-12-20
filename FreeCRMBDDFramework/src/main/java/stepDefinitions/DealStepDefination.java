package stepDefinitions;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DealStepDefination {
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
	
	@Then("^User enter username and password$")
	public void User_enter_username_and_password(DataTable credential) {
		List<List<String>> data = credential.raw();
		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));   
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
	
	@Then("^User move to new deal page$")
	public void User_move_to_new_deal_page() {
		driver.switchTo().frame("mainpanel");
		Actions actions =new Actions(driver);
		actions.moveToElement(driver.findElement(By.xpath("//a[@title='Deals']"))).build().perform();
		driver.findElement(By.xpath("//a[@title='New Deal']")).click();
		
	}
	
	@Then("^user enters deal details$")
	public void user_enters_deal_details(DataTable dealdata) {
		List<List<String>> data1 = dealdata.raw();
		driver.findElement(By.id("title")).sendKeys(data1.get(0).get(0));
		driver.findElement(By.id("amount")).sendKeys(data1.get(0).get(1));
		driver.findElement(By.id("probability")).sendKeys(data1.get(0).get(2));
		driver.findElement(By.id("commission")).sendKeys(data1.get(0).get(3));
		
	}
	
	@Then("^close the browser$")
	public void close_the_browser() {
		driver.quit();
	}	
	
}