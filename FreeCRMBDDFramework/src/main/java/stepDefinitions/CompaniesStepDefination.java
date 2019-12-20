package stepDefinitions;

import java.util.Map;

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

public class CompaniesStepDefination {
	WebDriver driver;

	@Given("^User is already on Login page$")
	public void user_is_already_on_Login_page() {
		System.setProperty("webdriver.chrome.driver",
				"F:\\Programming Software\\Selenium\\Selenium Browser Driver\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://classic.crmpro.com/index.html");
	}

	@When("^title of Login page is Free CRM$")
	public void title_of_Login_page_is_Free_CRM() {
		String titleString = driver.getTitle();
		System.out.println(titleString);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.",
				titleString);

	}

	@Then("^User enter username and password$")
	public void User_enter_username_and_password(DataTable credential) {
		for (Map<String, String> data : credential.asMaps(String.class, String.class)) {
			driver.findElement(By.name("username")).sendKeys(data.get("username"));
			driver.findElement(By.name("password")).sendKeys(data.get("password"));
		}
	}

	@Then("^User clicks on login Button$")
	public void user_clicks_on_login_Button() {

		WebElement loginbtn = driver.findElement(By.xpath("//input[@class='btn btn-small']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginbtn);
	}

	@Then("^user is on HomePage$")
	public void user_is_on_HomePage() {
		String title = driver.getTitle();
		System.out.println("Home Page title : " + title);
		Assert.assertEquals("CRMPRO", title);
	}

	@Then("^User move to New Company page$")
	public void user_move_to_New_Company_page() {

		driver.switchTo().frame("mainpanel");
		Actions actions = new Actions(driver);
		actions.moveToElement(driver.findElement(By.xpath("//a[@title='Companies']"))).build().perform();
		driver.findElement(By.xpath("//a[@title='New Company']")).click();
	}

	@Then("^User enter company details$")
	public void user_enter_company_details(DataTable compData) {
		for (Map<String, String> data : compData.asMaps(String.class, String.class)) {
			driver.findElement(By.name("company_name")).sendKeys(data.get("Company"));
			driver.findElement(By.id("num_of_employees")).sendKeys(data.get("Employees"));
			driver.findElement(By.name("city")).sendKeys(data.get("City"));
			driver.findElement(By.name("country")).sendKeys(data.get("Country"));
			driver.findElement(By.id("phone")).sendKeys(data.get("Phone"));

			driver.findElement(By.xpath("//input[@type='submit'][@value='Save']")).click(); // click on save button

			Actions actions = new Actions(driver);
			actions.moveToElement(driver.findElement(By.xpath("//a[@title='Companies']"))).build().perform();
			driver.findElement(By.xpath("//a[@title='New Company']")).click();

		}
	}
	
	@Then("^close the browser$")
	public void close_the_browser() {
		driver.quit();
	}

}
