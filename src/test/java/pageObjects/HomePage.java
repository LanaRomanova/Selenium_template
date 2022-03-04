package pageObjects;

import driverWrapper.Web;
import framework.WebCommands;
import org.openqa.selenium.By;

public class HomePage extends WebCommands {

    Web web = new Web();
    By nameBox = By.id("contact-form-name");
    By emailBox = By.id("contact-form-email");
    By messageBox = By.id("contact-form-message");
    By sendButton = By.id("contact-form-submit-btn");
    By errorMes = By.className("error");

    public void openApp(String env,String browser){
        web.openUrl(env, browser);
        sleep(1000);
    }

    public void scrollToContact() {
        scrollToBottom();
    }

    public void typeName(String name) {
        type(nameBox,name);
        pressEnter(nameBox);
        sleep(1000);
    }

    public void typeEmail (String email) {
        type(emailBox,email);
        pressEnter(emailBox);
        sleep(1000);
    }

    public void typeMessage (String message) {
        type(messageBox,message);
        pressEnter(messageBox);
        sleep(1000);
    }

    public void clickSend() {
        clickThis(sendButton);
    }

    public boolean isErrorMessageDisplayed (String errorText) {
        boolean isErrorMessageDisplayed = false;
        if (getElement(errorMes).getText().equals(errorText)) {
            isErrorMessageDisplayed = true;
        }
        return isErrorMessageDisplayed;
    }

    public void quitNevelixApp(){
        web.quitPages();
    }

}
