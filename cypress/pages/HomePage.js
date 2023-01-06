class HomePage {
    elements = {
        logoutBtn: () => cy.get('#ctl00_HeaderTopControl1_LinkButtonLogout')
    };

    verifyLogoutBtnIsDisplayed(){
        this.elements.logoutBtn().should("have.text","Logout");
    };

  }
  
  export const homePage = new HomePage();