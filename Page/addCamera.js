module.exports = 
{
    addCamera:addCamera
};

function addCamera(){
    cy.get(':nth-child(7) > a').click();
    cy.get(':nth-child(2) > .product-thumb > :nth-child(2) > .caption > h4 > a').click();
    cy.get('#button-cart').click();
}