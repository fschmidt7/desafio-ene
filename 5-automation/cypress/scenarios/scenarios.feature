Feature: Automatizando o carrinho de compras na Amazon

  Background:
    Given que estou na página inicial da Amazon

  Scenario: Adicionar um item ao carrinho
    When eu pesquiso por "Produto de Exemplo"
    And eu clico no primeiro resultado de pesquisa
    And eu adiciono o item ao carrinho
    Then o item deve ser adicionado ao carrinho com sucesso

Scenario: Validar o valor de um item no carrinho
    When eu pesquiso por "Produto de Exemplo"
    And eu clico no primeiro resultado de pesquisa
    And eu adiciono o item ao carrinho
    And eu acesso o carrinho de compras
    Then o valor do item no carrinho deve ser igual ao valor vizualizado no catalogo

  Scenario: Remover um item do carrinho
    When eu pesquiso por "Produto de Exemplo"
    And eu clico no primeiro resultado de pesquisa
    And eu adiciono o item ao carrinho
    And eu acesso o carrinho de compras
    And eu removo o item do carrinho
    Then o item deve ser removido do carrinho com sucesso
