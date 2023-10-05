describe('Testes do Carrinho de Compras na Amazon.com.br', () => {
  beforeEach(() => {
    cy.visit('https://www.amazon.com.br/');
  });

  it('Adicionar um produto ao carrinho', () => {
    cy.compra_camera();
  });

  it('Verificar se o valor do carrinho corresponde ao da compra', () => {
    cy.compra_camera();

    cy.valida_valor();
  });

  it('Remover um produto do carrinho', () => {
    cy.compra_camera();

    cy.valida_valor();

    cy.excluir_produto();
  });
});
