

describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('get').click()
      cy.get('#query-btn')
      .should('contain', 'Button')
      .and('have.class', 'query-btn')
      .and('be.visible')
      .and('be.enabled')

      expect(true).to.be.true

      assert.equal(4, 4, 'NOT EQUAL')
    })
  })

  // Implicit (should(), and()) - неявные, встроенные утверждения, которые всегда выполняются, Explicit(expect(), assert()) - явные,