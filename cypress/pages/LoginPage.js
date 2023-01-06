class LoginPage {
    elements = {
        loginModalBtn: () => cy.get('.HPHeaderLogin > a > img'),
        userTextbox: () => cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail'),
        pwdTextbox: () => cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword'),
        loginBtn: () => cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin'),
    };

    openModal(){
        this.elements.loginModalBtn().click();
    };
    fillUser(email){
        this.elements.userTextbox().type(email);
    };
    fillPwd(pwd){
        this.elements.pwdTextbox().type(pwd);
    };
    clickLogin(){
        this.elements.loginBtn().click();
    };
    

  }
  
  export const loginPage = new LoginPage();