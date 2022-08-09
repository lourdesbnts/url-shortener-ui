describe('Homeview page', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {
        fixture: "mock.json",
      })
    cy.visit('http://localhost:3000/')
  
  })

    it('Should have a tile and card on load', () => {
      cy.get('[data-cy="App"]').contains("URL Shortener")

    });

    it('should see a form on load', () => {
      cy.get('form')
      cy.get('.title-input')
      cy.get('.long-url-input')
    })

    it('should be able to add a url card and see it displayed', () => {
      cy.get('[data-cy="title-input"]').type('Title...')
      cy.get('[data-cy="long-url-input"]').type('URL to Shorten...')
      cy.intercept('POST', 'http://localhost:3001/api/v1/urls', { fixture: 'secondMock.json' })
      cy.visit('http://localhost:3000')
      cy.get('[data-cy="submit-button"]').click()
      cy.get('.url').last()
      .contains('POST')
    })
})