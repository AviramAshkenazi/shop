module.exports = 
{
  searchItem:searchItem
};

function searchItem(){
  let search = cy.get('.form-control');
  search.type('iphone');
  cy.get('.input-group-btn > .btn').click();
  cy.get('h4 > a').click();
}
 