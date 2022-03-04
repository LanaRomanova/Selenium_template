package pageObjects;


import driverWrapper.Web;
import framework.WebCommands;
import org.openqa.selenium.By;
import org.openqa.selenium.interactions.Actions;

import java.util.Set;

public class JoinUsPage extends WebCommands {

    By joinUsButton = By.xpath("//*[@title='Careers and Benefits']");
    By lookingForYou = By.xpath("//body/div[2]/section[2]/div[1]/div[2]/ul[2]/li[1]/div[1]");
    By moreButton = By.xpath("//a[contains(text(),'More Info')]");
    By greetMessage = By.xpath("//h2[contains(text(),'Thanks for visiting Nevelex Corp. Job Board. Pleas')]");


    public void clickJoinUs() {
        clickThis(joinUsButton);
        sleep(1000);
    }

    public void scrollToLookingForYou() {
        scrollDownByPixel(500);
        sleep(1000);
    }

    public void clickLooking() {
        clickThis(lookingForYou);
        sleep(1000);
    }

    public void scrollToMoreInfoB() {
        scrollDownByPixel(200);
        sleep(1000);
    }

    public String homeHandle() {
        return getCurrentHandle();
    }

    public void clickAndSwitchToJobPage() {
        clickThis(moreButton);
        sleep(2000);
        Set<String> allHandles = getAllHandles();
        for (String handle : allHandles) {
            if (!handle.equals(homeHandle())) {
                switchToWindow(handle);
                break;
            }
        }
    }

    public boolean isGreetingMesDisplayed() {
      return isElementDisplayed(greetMessage);
    }


}
