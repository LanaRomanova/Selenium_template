package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageObjects.HomePage;





public class HomepageSteps {

    HomePage hp = new HomePage();

    @Given("^I open application in (.*) (.*) Browser$")
    public void openApplication(String env, String browser) {
        hp.openApp(env, browser);
    }

    @When("^I scroll down to Contact form$")
    public void scrollDownToContactForm() {
        hp.scrollToContact();
    }

    @When("^I enter '(.*)'$")
    public void enterValidName(String name) {
        hp.typeName(name);
    }

    @When("^I enter invalid email with '@' symbol '(.*)'$")
    public void enterInvalidEmail(String email) {
        hp.typeEmail(email);
    }

    @When("I enter message '(.*)'$")
    public void enterMessage(String message) {
        hp.typeMessage(message);
    }

    @When("^I click Send button$")
    public void clickSendButton() {
        hp.clickSend();
    }

    @Then("^I verify error message displayed '(.+)'$")
    public void verifyErrorMessageDisplayed(String errorText) {
        Assert.assertTrue(hp.isErrorMessageDisplayed(errorText), "Error message is NOT displayed");
    }

    @When("^I quit application$")
    public void quitApplication() {
        hp.quitNevelixApp();
    }

}
