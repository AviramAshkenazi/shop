describe("Create User",()=>{
    it("register",()=>{
        cy.visit('http://shop.thetestingworld.com/index');
        let search = cy.get('.form-control');
        search.type('iphone');
        cy.get('.input-group-btn > .btn').click();
        cy.get('h4 > a').click();
        cy.get('.col-sm-8 > .nav > :nth-child(2) > a').click();
        let name = cy.get('#input-name');
        name.type('john doe');
        let review = cy.get('#input-review');
        review.type(
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id accumsan enim, eget porta ante. Pellentesque non pellentesque ipsum, et dignissim nisl. Aliquam erat volutpat. Maecenas quis ante ut nisi congue eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus pharetra maximus ipsum, ac porta mi ullamcorper non. Cras vel tellus at nisi egestas ultricies.')
        cy.get('#button-review').click();
        cy.get('[value="4"]').click();
        cy.get('#button-cart').click();
        cy.get('#input-quantity').type('4');
        cy.get('.btn-group').get('.btn-default').find('.fa-heart').click();
        cy.get(':nth-child(7) > a').click();
        cy.get(':nth-child(2) > .product-thumb > :nth-child(2) > .caption > h4 > a').click();
        cy.get('#button-cart').click();
        cy.get('.breadcrumb > :nth-child(1) > a > .fa').click();
        cy.get(':nth-child(3) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > a').click();
        cy.get('#input-sort').select('http://shop.thetestingworld.com/index.php?route=product/category&path=25_28&sort=p.price&order=DESC');
        cy.get('[onclick*=42] > .fa.fa-exchange').click({force:true})
        cy.get('[onclick*=33] > .fa.fa-exchange').click({force:true})
        cy.get('.alert > [href="http://shop.thetestingworld.com/index.php?route=product/compare"]').click()
        cy.get(':nth-child(2) > .btn-primary').click()
        cy.get(':nth-child(3) > .btn-primary').click()
        cy.get('#input-option218 > :nth-child(1) > label > input').click()
        cy.get('#input-option223 > :nth-child(2) > label').click();
        cy.get('#input-option208').type('bla');
        cy.get('#input-option217').select('2');
        cy.get('#input-option209').type('bla');
        cy.get('#button-cart').click()
        cy.get('#currency > .btn-group > .dropdown-toggle').click()
        cy.get(':nth-child(2) > .currency-select').click()
        cy.get('.btn-inverse').click()
        cy.get('[href="http://shop.thetestingworld.com/index.php?route=checkout/cart"] > strong').click()
    })
})