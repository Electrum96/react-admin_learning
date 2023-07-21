before(function(){
    cy.fixture('example.json').as('test_data')
})


it('Read file with fixture', function() {

    cy.fixture('example.json').then((data) => {
        cy.log(data.email)
        cy.log(data.name)
    })

    cy.log(this.test_data.name)
})/// чтение файлов при помощи fixture

it('Read file using readFile()', function() {
    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.email)
    })
})