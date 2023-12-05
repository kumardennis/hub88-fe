/// <reference types="cypress" />

describe('Operations on countries table', () => {
  it('renders all countries successfully', () => {
    cy.visit('/');

    cy.get('.countries-table').find('tr').should('have.length.at.least', 50);
  });

  it('searches for a country by code successfully', () => {
    cy.visit('/');

    cy.get('.search-countries-by-code-input').type('AD');

    cy.get('.countries-table > tbody').find('tr').should('have.length', 1);

    cy.wait(1000);

    cy.get('.countries-table').contains('td', 'Andorra').should('be.visible');
  });

  it('accepts only 2 chars as input successfully', () => {
    cy.visit('/');

    cy.get('.search-countries-by-code-input').type('EEX');

    cy.get('.search-countries-by-code-input').should('have.value', 'EE');

    cy.get('.countries-table > tbody').find('tr').should('have.length', 1);

    cy.wait(1000);

    cy.get('.countries-table').contains('td', 'Estonia').should('be.visible');
  });

  it('shows no results text if none found successfully', () => {
    cy.visit('/');

    cy.get('.search-countries-by-code-input').type('ZZ');

    cy.contains('No results!').should('be.visible');
  });
});
