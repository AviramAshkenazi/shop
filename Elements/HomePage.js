module.exports = 
{
  searchLine,
  user,
  wishList,
  shoppingList,
  contact,
  checkout,
  desktop,
  laptops,
  components,
  tablets,
  software,
  phone,
  camera,
  mp3,
  about,
  delivery,
  privacy,
  terms,
  contactUs,
  returns,
  siteMap,
  brands,
  giftVochers,
  affiliates,
  specials,
  myAccount,
  orderHistory,
  wishlistAccount,
  newsletter
};


function searchLine(){
    let search = cy.get('.form-control');
    search.type('iphone');
}

function user(){
    cy.get('.list-inline > :nth-child(1) > a > .fa');
}

function wishList(){
    cy.get('#wishlist-total > .fa');
}

function shoppingList(){
    cy.get(':nth-child(4) > a > .fa');
}

function checkout(){
    cy.get(':nth-child(5) > a > .fa');
}

function contact(){
    cy.get(':nth-child(5) > a > .fa')
}

function desktop(){
    cy.get('.nav > :nth-child(1) > .dropdown-toggle')
}

function laptops(){
    cy.get('.nav > :nth-child(2) > .dropdown-toggle')
}

function components(){
    cy.get(':nth-child(3) > .dropdown-toggle')
}

function tablets(){
    cy.get('.nav > :nth-child(4) > a')
}

function software(){
    cy.get('.nav > :nth-child(5) > a')
}

function phone(){
    cy.get(':nth-child(6) > a')
}

function camera(){
    cy.get(':nth-child(7) > a')
}

function mp3(){
    cy.get(':nth-child(8) > .dropdown-toggle')
}

function about(){
    cy.get('.row > :nth-child(1) > .list-unstyled > :nth-child(1) > a')
}

function delivery(){
    cy.get('.row > :nth-child(1) > .list-unstyled > :nth-child(2) > a')
}

function privacy(){
    cy.get('.row > :nth-child(1) > .list-unstyled > :nth-child(3) > a')
}

function terms(){
    cy.get('.row > :nth-child(1) > .list-unstyled > :nth-child(4) > a')
}

function contactUs(){
    cy.get(':nth-child(2) > .list-unstyled > :nth-child(1) > a')
}

function returns(){
    cy.get(':nth-child(2) > .list-unstyled > :nth-child(2) > a')
}

function siteMap(){
    cy.get(':nth-child(2) > .list-unstyled > :nth-child(3) > a')
}

function brands(){
    cy.get(':nth-child(3) > .list-unstyled > :nth-child(1) > a')
}

function giftVochers(){
    cy.get(':nth-child(3) > .list-unstyled > :nth-child(2) > a')
}

function affiliates(){
    cy.get(':nth-child(3) > .list-unstyled > :nth-child(3) > a')
}

function specials(){
    cy.get(':nth-child(3) > .list-unstyled > :nth-child(4) > a')
}

function myAccount(){
    cy.get(':nth-child(4) > .list-unstyled > :nth-child(1) > a')
}

function orderHistory(){
    cy.get(':nth-child(4) > .list-unstyled > :nth-child(2) > a')
}

function wishlistAccount(){
    cy.get(':nth-child(4) > .list-unstyled > :nth-child(3) > a')
}

function newsletter(){
    cy.get(':nth-child(4) > .list-unstyled > :nth-child(4) > a')
}