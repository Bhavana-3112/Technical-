Feature: Password Reset

  Scenario: Password Reset Successfully
    Given the user is on the login page
    When the user clicks on 'Forgot Password'
    And the user enters their email
    Then a reset link should be sent to their email
