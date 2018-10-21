module.exports = 
{
  pc,
  mac,
  productCompare,
  listView,
  girdView,
  sortBy,
  sortByNameA_To_Z,
  sortByNameZ_To_A,
  sortByPriceHigh_To_Low,
  sortByPriceLow_To_High,
  sortByHighestRating,
  sortByLowestRating,
  sortByModelA_To_Z,
  sortByModleZ_To_A,
  show
};

function pc(){
    cy.get(':nth-child(5) > .col-sm-3 > ul > :nth-child(1) > a')
}

function mac(){
    cy.get(':nth-child(5) > .col-sm-3 > ul > :nth-child(2) > a')
}

function productCompare(){
    cy.get('#compare-total')
}

function listView(){
    cy.get('#list-view')
}

function girdView(){
    cy.get('#grid-view')
}

function sortBy(){
    cy.get('#input-sort')
}

function sortByNameA_To_Z(){
    cy.get('#input-sort').select('http://shop.thetestingworld.com/index.php?route=product/category&path=20&sort=pd.name&order=ASC')
}

function sortByNameZ_To_A(){
    cy.get('#input-sort').select('http://shop.thetestingworld.com/index.php?route=product/category&path=20&sort=pd.name&order=DESC')
}

function sortByPriceLow_To_High(){
    cy.get('#input-sort').select('http://shop.thetestingworld.com/index.php?route=product/category&path=20&sort=p.price&order=ASC')
}

function sortByPriceHigh_To_Low(){
    cy.get('#input-sort').select('http://shop.thetestingworld.com/index.php?route=product/category&path=20&sort=p.price&order=DESC')
}

function sortByHighestRating(){
    cy.get('#input-sort').select('http://shop.thetestingworld.com/index.php?route=product/category&path=20&sort=rating&order=DESC')
}

function sortByLowestRating(){
    cy.get('#input-sort').select('http://shop.thetestingworld.com/index.php?route=product/category&path=20&sort=rating&order=ASC')
}

function sortByModelA_To_Z(){
    cy.get('#input-sort').select('http://shop.thetestingworld.com/index.php?route=product/category&path=20&sort=p.model&order=ASC')
}

function sortByModleZ_To_A(){
    cy.get('#input-sort').select('http://shop.thetestingworld.com/index.php?route=product/category&path=20&sort=p.model&order=DESC')
}
    
function show(){
    cy.get('#input-limit')
}