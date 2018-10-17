module.exports = 
{
    compare:compare
};

function compare(){
    cy.get('[onclick*=42] > .fa.fa-exchange').click({force:true})
    cy.get('[onclick*=33] > .fa.fa-exchange').click({force:true})
    cy.get('.alert > [href="http://shop.thetestingworld.com/index.php?route=product/compare"]').click()
}