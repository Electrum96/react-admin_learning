import { LoginPage } from "./pages/login"

const loginPage = new LoginPage()

beforeEach(function() {
    cy.visit('http://localhost:5173/')

})

describe('All tests', () => {

it('Test1', function() {
    loginPage.enterUserName('email')
    loginPage.enterPassword('password')
    loginPage.clickLogin()  
    cy.get('[href="#/users"]').click()

})

it('Test2', function() {
    loginPage.enterUserName('email')
    loginPage.enterPassword('password')
    loginPage.clickLogin()  
    cy.get('[href="#/posts"]').click()

})
})

it('Test3', function() {
    loginPage.enterUserName('email')
    loginPage.enterPassword('password')
    loginPage.clickLogin()  
})