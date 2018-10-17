module.exports = 
{
    addMonitor:addMonitor
};

function addMonitor(){
    cy.get(':nth-child(3) > .btn-primary').click();
    cy.get(':nth-child(2) > .btn-primary').click();
    cy.get('#input-option208').type('bla');
    cy.get('#input-option217').select('2');
    cy.get('#input-option209').type('bla');
    cy.get('#button-cart').click()
}