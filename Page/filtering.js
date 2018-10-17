module.exports = 
{
    filtering:filtering
};


function filtering(){
    cy.get('.breadcrumb > :nth-child(1) > a > .fa').click();
    cy.get(':nth-child(3) > .dropdown-toggle').click()
    cy.get('.open > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > a').click();
    cy.get('#input-sort').select('http://shop.thetestingworld.com/index.php?route=product/category&path=25_28&sort=p.price&order=DESC');
}