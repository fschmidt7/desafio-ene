Cypress.Commands.add('compra_camera',()=>{
    cy.get('#twotabsearchtextbox').type('Domary CDR2 1080P 15fps Full HD 24MP Digital Camera 3.0{enter}');

    cy.get('[data-asin="B09GFDWKB6"] > .sg-col-inner > .s-widget-container > .puis-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section').click();

    cy.get('#add-to-cart-button').click()

    cy.get('#attachSiNoCoverage').click()

    cy.get('.a-size-medium-plus').should('exist');
})

Cypress.Commands.add('valida_valor',()=>{
    cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()

    cy.get('#sc-subtotal-amount-activecart > .a-size-medium').should('exist')
})

Cypress.Commands.add('excluir_produto',()=>{
    cy.get('.sc-action-delete > .a-declarative > .a-color-link').click()

    cy.get('.a-row > .a-spacing-mini').should('exist')
})