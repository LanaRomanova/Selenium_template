$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePage.feature");
formatter.feature({
  "line": 2,
  "name": "Homepage",
  "description": "",
  "id": "homepage",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify error message displayed for invalid email in Contact form",
  "description": "",
  "id": "homepage;verify-error-message-displayed-for-invalid-email-in-contact-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open application in local \u003cBrowser\u003e Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I scroll down to Contact form",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter \u0027\u003cvalidName\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter invalid email with \u0027@\u0027 symbol \u0027\u003cinvalidEmail\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter message \u0027\u003cmessage\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click Send button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify error message displayed \u0027You have enter an invalid e-mail address, try again.\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I quit application",
  "keyword": "When "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "homepage;verify-error-message-displayed-for-invalid-email-in-contact-form;",
  "rows": [
    {
      "cells": [
        "Browser",
        "validName",
        "invalidEmail",
        "message"
      ],
      "line": 15,
      "id": "homepage;verify-error-message-displayed-for-invalid-email-in-contact-form;;1"
    },
    {
      "cells": [
        "Chrome",
        "Black Cat",
        "abs@ghh.zxy",
        "peace"
      ],
      "line": 16,
      "id": "homepage;verify-error-message-displayed-for-invalid-email-in-contact-form;;2"
    },
    {
      "cells": [
        "Firefox",
        "Lady Bug",
        "xyz@sdf.12y",
        "sunny"
      ],
      "line": 17,
      "id": "homepage;verify-error-message-displayed-for-invalid-email-in-contact-form;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Verify error message displayed for invalid email in Contact form",
  "description": "",
  "id": "homepage;verify-error-message-displayed-for-invalid-email-in-contact-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open application in local Chrome Browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I scroll down to Contact form",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter \u0027Black Cat\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter invalid email with \u0027@\u0027 symbol \u0027abs@ghh.zxy\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter message \u0027peace\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click Send button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify error message displayed \u0027You have enter an invalid e-mail address, try again.\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I quit application",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "local",
      "offset": 22
    },
    {
      "val": "Chrome",
      "offset": 28
    }
  ],
  "location": "HomepageSteps.openApplication(String,String)"
});
formatter.result({
  "duration": 13592265000,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.scrollDownToContactForm()"
});
formatter.result({
  "duration": 936600584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black Cat",
      "offset": 9
    }
  ],
  "location": "HomepageSteps.enterValidName(String)"
});
formatter.result({
  "duration": 2228084958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abs@ghh.zxy",
      "offset": 39
    }
  ],
  "location": "HomepageSteps.enterInvalidEmail(String)"
});
formatter.result({
  "duration": 1125071833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "peace",
      "offset": 17
    }
  ],
  "location": "HomepageSteps.enterMessage(String)"
});
formatter.result({
  "duration": 1101490875,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.clickSendButton()"
});
formatter.result({
  "duration": 290409500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You have enter an invalid e-mail address, try again.",
      "offset": 34
    }
  ],
  "location": "HomepageSteps.verifyErrorMessageDisplayed(String)"
});
formatter.result({
  "duration": 108630083,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.quitApplication()"
});
formatter.result({
  "duration": 203218167,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify error message displayed for invalid email in Contact form",
  "description": "",
  "id": "homepage;verify-error-message-displayed-for-invalid-email-in-contact-form;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open application in local Firefox Browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I scroll down to Contact form",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter \u0027Lady Bug\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter invalid email with \u0027@\u0027 symbol \u0027xyz@sdf.12y\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter message \u0027sunny\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click Send button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify error message displayed \u0027You have enter an invalid e-mail address, try again.\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I quit application",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "local",
      "offset": 22
    },
    {
      "val": "Firefox",
      "offset": 28
    }
  ],
  "location": "HomepageSteps.openApplication(String,String)"
});
formatter.result({
  "duration": 9525623458,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.scrollDownToContactForm()"
});
formatter.result({
  "duration": 46263541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lady Bug",
      "offset": 9
    }
  ],
  "location": "HomepageSteps.enterValidName(String)"
});
formatter.result({
  "duration": 1125463708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz@sdf.12y",
      "offset": 39
    }
  ],
  "location": "HomepageSteps.enterInvalidEmail(String)"
});
formatter.result({
  "duration": 1092357250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sunny",
      "offset": 17
    }
  ],
  "location": "HomepageSteps.enterMessage(String)"
});
formatter.result({
  "duration": 1077953208,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.clickSendButton()"
});
formatter.result({
  "duration": 276133667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You have enter an invalid e-mail address, try again.",
      "offset": 34
    }
  ],
  "location": "HomepageSteps.verifyErrorMessageDisplayed(String)"
});
formatter.result({
  "duration": 30738875,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.quitApplication()"
});
formatter.result({
  "duration": 647859125,
  "status": "passed"
});
formatter.uri("JoinUsPage.feature");
formatter.feature({
  "line": 2,
  "name": "JoinUsPage",
  "description": "",
  "id": "joinuspage",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Verify greeting message on apply to job page is displayed",
  "description": "",
  "id": "joinuspage;verify-greeting-message-on-apply-to-job-page-is-displayed",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I open application in local \u003cBrowser\u003e Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click JoinUs Button on the top menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I scroll down to Looking For You image",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Looking For You image",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I scroll down to More Info button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click More Info button and switch to \u0027https://nevelex.applytojob.com/apply\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify greeting message on apply to job page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I quit application",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "joinuspage;verify-greeting-message-on-apply-to-job-page-is-displayed;",
  "rows": [
    {
      "cells": [
        "Browser"
      ],
      "line": 17,
      "id": "joinuspage;verify-greeting-message-on-apply-to-job-page-is-displayed;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 18,
      "id": "joinuspage;verify-greeting-message-on-apply-to-job-page-is-displayed;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 19,
      "id": "joinuspage;verify-greeting-message-on-apply-to-job-page-is-displayed;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Verify greeting message on apply to job page is displayed",
  "description": "",
  "id": "joinuspage;verify-greeting-message-on-apply-to-job-page-is-displayed;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I open application in local Chrome Browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click JoinUs Button on the top menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I scroll down to Looking For You image",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Looking For You image",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I scroll down to More Info button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click More Info button and switch to \u0027https://nevelex.applytojob.com/apply\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify greeting message on apply to job page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I quit application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "local",
      "offset": 22
    },
    {
      "val": "Chrome",
      "offset": 28
    }
  ],
  "location": "HomepageSteps.openApplication(String,String)"
});
formatter.result({
  "duration": 9665182416,
  "status": "passed"
});
formatter.match({
  "location": "JoinUsPageSteps.clickJoinUsButtonOnTheTopMenu()"
});
formatter.result({
  "duration": 2673741916,
  "status": "passed"
});
formatter.match({
  "location": "JoinUsPageSteps.scrollDownToLookingForYouImage()"
});
formatter.result({
  "duration": 1089064375,
  "status": "passed"
});
formatter.match({
  "location": "JoinUsPageSteps.clickOnLookingForYouImage()"
});
formatter.result({
  "duration": 1298845250,
  "status": "passed"
});
formatter.match({
  "location": "JoinUsPageSteps.scrollDownToMoreInfoButton()"
});
formatter.result({
  "duration": 1012020209,
  "status": "passed"
});
formatter.match({
  "location": "JoinUsPageSteps.clickMoreInfoButtonAndSwitch()"
});
formatter.result({
  "duration": 2333315541,
  "status": "passed"
});
formatter.match({
  "location": "JoinUsPageSteps.verifyIsGreetingDisplayed()"
});
formatter.result({
  "duration": 233585250,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.quitApplication()"
});
formatter.result({
  "duration": 123079333,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify greeting message on apply to job page is displayed",
  "description": "",
  "id": "joinuspage;verify-greeting-message-on-apply-to-job-page-is-displayed;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I open application in local Firefox Browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click JoinUs Button on the top menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I scroll down to Looking For You image",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Looking For You image",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I scroll down to More Info button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click More Info button and switch to \u0027https://nevelex.applytojob.com/apply\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify greeting message on apply to job page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I quit application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "local",
      "offset": 22
    },
    {
      "val": "Firefox",
      "offset": 28
    }
  ],
  "location": "HomepageSteps.openApplication(String,String)"
});
formatter.result({
  "duration": 7174539250,
  "status": "passed"
});
formatter.match({
  "location": "JoinUsPageSteps.clickJoinUsButtonOnTheTopMenu()"
});
formatter.result({
  "duration": 1607238791,
  "status": "passed"
});
formatter.match({
  "location": "JoinUsPageSteps.scrollDownToLookingForYouImage()"
});
formatter.result({
  "duration": 1021973125,
  "status": "passed"
});
formatter.match({
  "location": "JoinUsPageSteps.clickOnLookingForYouImage()"
});
formatter.result({
  "duration": 1322345291,
  "status": "passed"
});
formatter.match({
  "location": "JoinUsPageSteps.scrollDownToMoreInfoButton()"
});
formatter.result({
  "duration": 1036692125,
  "status": "passed"
});
formatter.match({
  "location": "JoinUsPageSteps.clickMoreInfoButtonAndSwitch()"
});
formatter.result({
  "duration": 2157602750,
  "status": "passed"
});
formatter.match({
  "location": "JoinUsPageSteps.verifyIsGreetingDisplayed()"
});
formatter.result({
  "duration": 50235875,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.quitApplication()"
});
formatter.result({
  "duration": 659285209,
  "status": "passed"
});
});