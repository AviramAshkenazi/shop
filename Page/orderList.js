module.exports = 
{
    orderList:orderList
};

function orderList(){
    cy.get('.btn-inverse').click()
    cy.get('[href="http://shop.thetestingworld.com/index.php?route=checkout/cart"] > strong').click()
    cy.get(':nth-child(3) > :nth-child(4) > .input-group > .input-group-btn > .btn-danger').click()
}