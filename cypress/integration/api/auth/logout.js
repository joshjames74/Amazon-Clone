const _route = 'http://localhost:3000/api/auth/logout';

describe('/api/auth/logout test', () => {
    it('Visit /api/auth/logout', () => {
        cy.visit(_route)
        cy.contains('Oops!, something went wrong')
    })
})