export class LoginPage{

    userNameTextBox = '#username';
    passwordTextBox = '#password';
    loginButton = '.MuiButtonBase-root';


   enterUserName(username: string) {

    cy.get(this.userNameTextBox).type(username)

   }

   enterPassword(password:string) {
    cy.get(this.passwordTextBox).type(password)

   }

   clickLogin() {
    cy.get(this.loginButton).click()

   }
}