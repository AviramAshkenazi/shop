module.exports = 
{
    chanageMoney:chanageMoney
};

function chanageMoney(){
    cy.get('#currency > .btn-group > .dropdown-toggle').click()
    cy.get(':nth-child(2) > .currency-select').click()
}