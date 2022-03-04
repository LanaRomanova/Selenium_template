@regression
Feature: JoinUsPage



  Scenario Outline: Verify greeting message on apply to job page is displayed
    Given I open application in local <Browser> Browser
    When  I click JoinUs Button on the top menu
    And   I scroll down to Looking For You image
    And   I click on Looking For You image
    And   I scroll down to More Info button
    And   I click More Info button and switch to 'https://nevelex.applytojob.com/apply' page
    Then  I verify greeting message on apply to job page is displayed
    And   I quit application

    Examples:
      | Browser|
      | Chrome |
      | Firefox|
