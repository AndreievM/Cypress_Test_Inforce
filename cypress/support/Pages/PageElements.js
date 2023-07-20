import PageObject from '../PageObject';

class PageElements extends PageObject {
  url = 'https://www.saucedemo.com/';

  checkUrl(url) {
    cy.url()
      .should('include', url);
  }

  checkLogInBtn() {
    cy.get('[data-test="login-button"]')
      .should('contain', 'Login');
  }

  clearInputs() {
    cy.get('[data-test="username"]')
      .clear();
    cy.get('[data-test="password"]')
      .clear();
  }

  checkPlaceholders() {
    cy.get('[data-test="username"]')
      .should('have.attr', 'placeholder', 'Username');
    cy.get('[data-test="password"]')
    .should('have.attr', 'placeholder', 'Password');
  }

  clickLoginBtn() {
    cy.get('[data-test="login-button"]')
      .click();
  }

  enterUsername(username) {
    cy.get('[data-test="username"]')
      .type(username);
  }

  enterPassword(password) {
    cy.get('[data-test="password"]')
      .type(password);
  }

  noUserError() {
    cy.get('.error-message-container error')
      .should('contain', 'Epic sadface: Username and password do not match any user in this service');
  }

  lockedOutError() {
    cy.get('.error-message-container error')
      .should('contain', 'Epic sadface: Sorry, this user has been locked out.');
  }

  noUsernameError() {
    cy.get('.error-message-container error')
      .should('contain', 'Epic sadface: Username is required');
  }

  clickOnBurgerMenu() {
    cy.get('.bm-burger-button')
      .click();
  }

  checkLogOutBtn() {
    cy.contains('bm-item menu-item', 'Logout')
      .should('exist');
  }

  logOut() {
    cy.contains('bm-item menu-item', 'Logout')
      .click();
  }
}

export default PageElements;