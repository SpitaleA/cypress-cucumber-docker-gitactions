// cypress/e2e/duckduckgo.ts
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../pages/LoginPage";
import { homePage } from "../../pages/HomePage";

Given("User visit {string}", function (url) {
  cy.visit(url);
});

When("User fill the Email fieldwith the value {string}", function (email) {
  loginPage.openModal();
  loginPage.fillUser(email);
});

When("User fill the password field with the correct password which is {string}", function (pwd) {
  loginPage.fillPwd(pwd);
});

When("User press login button", function () {
  loginPage.clickLogin();
});

Then("The app takes me to home page where the logout button is displayed", function () {
  homePage.verifyLogoutBtnIsDisplayed();
});