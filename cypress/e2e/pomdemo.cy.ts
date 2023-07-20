import { LoginPage } from "./pages/login"

const loginPage = new LoginPage()
it('POM Demo', function() {

    cy.visit('http://localhost:5173/')

    loginPage.enterUserName('email')
    loginPage.enterPassword('password')
    loginPage.clickLogin()

    // cy.get('#username').type('usualemail@mail.ru')
    // cy.get('#password').type('password')
    // cy.get('.MuiButtonBase-root').click()

   

})