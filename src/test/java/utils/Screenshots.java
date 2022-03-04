//package utils;
//
//import cucumber.api.java.After;
//import driverWrapper.Web;
//import org.testng.ITestResult;
//import ru.yandex.qatools.ashot.AShot;
//import ru.yandex.qatools.ashot.Screenshot;
//
//public class Screenshots {
//    public static void takeScreenshot(){
//
//        Screenshot screenshot = new AShot().takeScreenshot(Web.getDriver());
//    }
//
//    @After
//    public void tearDown(ITestResult result){
//
//        if(ITestResult.FAILURE == result.getStatus()){
//            takeScreenshot();
//        }
//
//    }
//}
