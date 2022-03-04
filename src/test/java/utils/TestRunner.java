package utils;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        features = {"src/main/resources/feature"},

        glue = {"stepDefinitions","driverWrapper"},

        tags = {"@regression"},

        plugin = {"pretty", "html:Reports/Default"},

        // readable console logs
        monochrome = true

)

public class TestRunner {
}
