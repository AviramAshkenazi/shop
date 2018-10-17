module.exports = 
{
    wishList:wishList
};

function wishList(){
    cy.get('.btn-group').get('.btn-default').find('.fa-heart').click();
}