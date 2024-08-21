import {APP_ROUTES} from './../../src/app/config/routes.config'
import {APP_API} from './../../src/app/config/api.config'
describe('Visit page Cv', () => {
  it('should show Cv list without card', () => {
    cy.intercept(APP_API.cv, {fixture: 'cvs'})
    cy.visit(APP_ROUTES.cv);
    cy.get('[test-cy="cvsList"]');
    cy.get('[test-cy="cvCard"]').should('not.exist');
    cy.get('[test-cy="cvsList"]').children().first().click();
    cy.intercept(APP_API.cv + 1, { fixture: 'cv1' });
    cy.get('[test-cy="cvDetails"]').click({ force: true });
    cy.location().should((actualLocaltion) => {
      expect(actualLocaltion.pathname).to.equal('/cv/1');
    });
  })
})
