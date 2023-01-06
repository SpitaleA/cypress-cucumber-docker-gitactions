@mio
Feature: todo.ly

  Scenario: Succesfull login
    Given User visit "https://todo.ly/"
    When User fill the Email fieldwith the value "augustolopez987@mailinator.com"
      And User fill the password field with the correct password which is "augusto"
      And User press login button
    Then The app takes me to home page where the logout button is displayed