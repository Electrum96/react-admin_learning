///<reference types="cypress"/>

it('Google Search', function(){
    cy.visit('http://localhost:5173')
    cy.get('#username').type('randomEmail@mail.ru')
    cy.get('#password').type('password')
    cy.get('.MuiButtonBase-root').click()
})