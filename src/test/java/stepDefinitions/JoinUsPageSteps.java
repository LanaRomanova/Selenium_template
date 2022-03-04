package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageObjects.JoinUsPage;

public class JoinUsPageSteps {



    JoinUsPage jup = new JoinUsPage();

    @When("^I click JoinUs Button on the top menu$")
    public void clickJoinUsButtonOnTheTopMenu() {
        jup.clickJoinUs();
    }

    @When("^I scroll down to Looking For You image$")
    public void scrollDownToLookingForYouImage() {
        jup.scrollToLookingForYou();
    }

    @When("^I click on Looking For You image$")
    public void clickOnLookingForYouImage() {
        jup.clickLooking();
    }

    @When("^I scroll down to More Info button$")
    public void scrollDownToMoreInfoButton() {
        jup.scrollToMoreInfoB();
    }

    @When("^I click More Info button and switch to 'https://nevelex.applytojob.com/apply' page$")
    public void clickMoreInfoButtonAndSwitch() {
        jup.clickAndSwitchToJobPage();
    }

    @Then("^I verify greeting message on apply to job page is displayed$")
    public void verifyIsGreetingDisplayed() {
        Assert.assertTrue(jup.isGreetingMesDisplayed(), "Greeting message is NOT displayed");
    }

}
