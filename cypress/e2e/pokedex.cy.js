describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('specific pokemon page can be visited', function() {
    cy.visit('http://localhost:5000')
    cy.contains('charmander').click()
    cy.url().should('include', '/pokemon/charmander')
    cy.get('[class*="pokemon-name"]').contains('charmander')
  })
})
