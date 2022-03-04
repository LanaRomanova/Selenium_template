@regression
Feature: Homepage

  Scenario Outline: Verify error message displayed for invalid email in Contact form
    Given I open application in local <Browser> Browser
    When  I scroll down to Contact form
    And   I enter '<validName>'
    And   I enter invalid email with '@' symbol '<invalidEmail>'
    And   I enter message '<message>'
    And   I click Send button
    Then  I verify error message displayed 'You have enter an invalid e-mail address, try again.'
    When  I quit application

    Examples:
      | Browser|validName|invalidEmail|message|
      | Chrome |Black Cat|abs@ghh.zxy |peace  |
      | Firefox|Lady Bug |xyz@sdf.12y |sunny  |
