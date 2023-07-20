/// <reference types='cypress' />

import PageElements from "../support/Pages/PageElements";

const pageElements = new PageElements;

describe('Saucedemo', () => {
  let data;

  beforeEach(() => {
    cy.task('generateData')
      .then(generateData => {
        data = generateData;
      });

    pageElements.visit();
  }); 

  it('should load the home page and verify the input fields and Login button', () => {
    pageElements.checkUrl(data.homePageUrl);
    pageElements.checkLogInBtn();
    pageElements.clearInputs();
    pageElements.checkPlaceholders();
  });

  it('should test the input fields 3 times', () => {
    pageElements.enterUsername(data.randomUsername);
    pageElements.enterPassword(data.randomPassword);
    pageElements.clickLoginBtn();
    pageElements.noUserError();

    pageElements.enterUsername(data.lockedOutUsername);
    pageElements.enterPassword(data.validPassword);
    pageElements.clickLoginBtn();
    pageElements.lockedOutError();

    pageElements.enterUsername('');
    pageElements.enterPassword(data.validPassword);
    pageElements.clickLoginBtn();
    pageElements.noUsernameError();
  });

  it('should log in and log out the user', () => {
    pageElements.enterUsername(data.validUsername);
    pageElements.enterPassword(data.validPassword);
    pageElements.clickLoginBtn();
    pageElements.checkUrl(data.loggedInUrl);
    pageElements.clickOnBurgerMenu();
    pageElements.checkLogOutBtn()
    pageElements.logOut();
    pageElements.checkUrl(data.homePageUrl);
  });
});