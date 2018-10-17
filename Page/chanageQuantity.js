module.exports = 
{
    chanageQuantity:chanageQuantity
};

function chanageQuantity(){
    cy.get('#input-quantity').type('4');
}
