module.exports = 
{
  addReview:addReview
};

function addReview(){
    cy.get('.col-sm-8 > .nav > :nth-child(2) > a').click();
    let name = cy.get('#input-name');
    name.type('john doe');
    let review = cy.get('#input-review');
    review.type(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id accumsan enim, eget porta ante. Pellentesque non pellentesque ipsum, et dignissim nisl. Aliquam erat volutpat. Maecenas quis ante ut nisi congue eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus pharetra maximus ipsum, ac porta mi ullamcorper non. Cras vel tellus at nisi egestas ultricies.')
    cy.get('#button-review').click();
    cy.get('[value="4"]').click();
    cy.get('#button-cart').click();
}