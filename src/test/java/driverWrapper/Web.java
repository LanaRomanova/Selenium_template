package driverWrapper;

import org.junit.After;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import utils.TestConstant;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.MalformedURLException;
import java.net.URL;

import java.util.concurrent.TimeUnit;

public class Web {

    // Methods related to Web-launch, close

    private static WebDriver driver;

    public void openUrl(String env,String browser) {

        String url = "https://www.nevelex.com/";
        String geckodriverPath = "/Users/lanaromanova/Documents/git/Selenium_template/src/test/java/drivers/geckodriver";
        String chromedriverPath = "/Users/lanaromanova/Documents/git/Selenium_template/src/test/java/drivers/chromedriver 5";

        if(env.equalsIgnoreCase("local")){
            switch (browser.toLowerCase()) {

                case "chrome":
                    System.setProperty("webdriver.chrome.driver",chromedriverPath);
                    driver = new ChromeDriver();
                    driver.get(url);
                    driver.manage().window().maximize();
                    driver.manage().timeouts().implicitlyWait(TestConstant.tenSeconds, TimeUnit.SECONDS);
                    break;

                case "firefox":
                   System.setProperty("webdriver.gecko.driver", geckodriverPath);
                   driver = new FirefoxDriver();
                   driver.get(url);
                   driver.manage().window().maximize();
                   break;

                default:
                    System.out.println("Invalid Browser");
            }

       /*}else if (env.equalsIgnoreCase("saucelab")){
           String sauceUrl = "https://oauth-romanovasv6-4bd81:2cfb0094-d7dc-4cbf-a02a-5d015b45c43d@ondemand.us-west-1.saucelabs.com:443/wd/hub";
          switch (browser.toLowerCase()) {
               case "chrome":
                   DesiredCapabilities capsChrome = DesiredCapabilities.chrome();
                   capsChrome.setCapability("platformName","macOS 11.00");
                   capsChrome.setCapability("browserVersion", "latest");

                   try {
                        driver = new RemoteWebDriver(new URL(sauceUrl), capsChrome);
                    } catch (MalformedURLException e) {
                        e.printStackTrace();
                    }
                    driver.get(url);
                    driver.manage().timeouts().implicitlyWait(TestConstant.tenSeconds, TimeUnit.SECONDS);
                    break;
                case "firefox":
                    DesiredCapabilities capsFirefox = DesiredCapabilities.firefox();
                    capsFirefox.setCapability("platformName","macOS 11.00");
                    capsFirefox.setCapability("browserVersion", "latest");

                    try {
                        driver = new RemoteWebDriver(new URL(sauceUrl), capsFirefox);
                    } catch (MalformedURLException e) {
                        e.printStackTrace();
                    }

                    driver.get(url);
                    driver.manage().timeouts().implicitlyWait(TestConstant.tenSeconds, TimeUnit.SECONDS);
                    break;

                default:
                    System.out.println("Invalid Browser");

            }
       */ }

    }

    public static void closePage () {
        driver.close();
    }

    public void quitPages () {
        driver.quit();
    }

    public static WebDriver getDriver () {
        return driver;
    }


}

