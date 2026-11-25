/* Cardápio da Hamburgueria Dona Dulce
   Fonte: cardápio online oficial da casa (Cardápio Web — app.cardapioweb.com/hamburgueriadonadulce),
   consultado em 24/11/2026. Preços e ofertas podem mudar; o valor vale no momento do pedido.
   p = preço atual · de = preço sem desconto (quando o item está em oferta) */
window.CARDAPIO = [
  {
    id: 'classicos', nome: 'Clássicos Dona Dulce', curto: 'Clássicos',
    intro: 'Hambúrguer bovino de 160g feito na casa, no autêntico pão brioche.',
    itens: [
      { n: 'Cheese Burger', d: 'Hambúrguer bovino de 160g feito na casa, queijo prato e cebola roxa no autêntico pão brioche.', p: 34.90, de: 37.90, tag: 'Oferta' },
      { n: 'Cheese Salada', d: 'Hambúrguer bovino de 160g feito na casa, queijo prato, salada fresca de alface, tomate e cebola roxa no autêntico pão brioche.', p: 43.90, tag: 'Mais pedido' },
      { n: 'Cheese Bacon', d: 'Hambúrguer bovino de 160g feito na casa, queijo prato, bacon e cebola roxa no autêntico pão brioche.', p: 43.90 },
      { n: 'Americano', d: 'Hambúrguer bovino de 160g feito na casa, queijo prato, picles artesanal, ketchup, mostarda e cebola roxa no autêntico pão brioche.', p: 43.90 },
      { n: 'Cheese Egg', foto: 'img/cheese-egg.webp', d: 'Hambúrguer bovino de 160g feito na casa, queijo prato, ovo frito e cebola roxa no autêntico pão brioche.', p: 41.90 },
      { n: 'Egg Bacon', d: 'Hambúrguer bovino de 160g feito na casa, queijo prato, ovo frito, bacon e cebola roxa no autêntico pão brioche.', p: 47.90 },
      { n: 'Texas Bacon', foto: 'img/texas-neon-crop.webp', d: 'Hambúrguer bovino de 160g feito na casa, cheddar cremoso, bacon, molho barbecue e cebola roxa no autêntico pão brioche.', p: 42.90, de: 48.90, tag: 'Oferta' },
      { n: 'Salada Bacon', foto: 'img/salada-bacon.webp', d: 'Hambúrguer bovino de 160g feito na casa, queijo prato, bacon e salada fresca de alface, tomate e cebola roxa no autêntico pão brioche.', p: 49.90 },
      { n: 'Bacon Americano', foto: 'img/americano-bacon.webp', d: 'Hambúrguer bovino de 160g feito na casa, queijo prato, picles artesanal, bacon, ketchup, mostarda e cebola roxa no autêntico pão brioche.', p: 49.90 },
      { n: 'Egg Bacon Especial', d: 'Hambúrguer bovino de 160g feito na casa, queijo prato, bacon, ovo frito, catupiry e cebola roxa no autêntico pão brioche.', p: 48.90, de: 52.90, tag: 'Novidade' },
      { n: 'Bacon Salada Especial', d: 'Hambúrguer bovino de 160g feito na casa, queijo prato, requeijão Scalla, bacon e salada fresca de alface, tomate e cebola roxa no pão tradicional.', p: 49.90, de: 54.90, tag: 'Novidade' },
      { n: 'Dona Dulce', foto: 'img/double-bacon.webp', d: 'Dois hambúrgueres bovinos somando 320g de carne, queijo prato e bacon no autêntico pão brioche.', p: 60.90, tag: 'O da casa' }
    ]
  },
  {
    id: 'frango', nome: 'Lanches de Frango', curto: 'Frango',
    intro: 'Burguinho de frango frito empanado de 150g.',
    itens: [
      { n: 'Franguito', d: 'Burguinho de frango frito empanado (150g), queijo prato, picles artesanal, cebola roxa e maionese especial no autêntico pão brioche.', p: 31.90, de: 36.90, tag: 'Oferta' },
      { n: 'Frango Supremo', d: 'Burguinho de frango frito empanado (150g), queijo prato, salada fresca de alface, tomate, cebola roxa e maionese especial no autêntico pão brioche.', p: 36.90 },
      { n: 'Bacon Supremo', d: 'Burguinho de frango frito empanado (150g), queijo prato, salada fresca de alface, tomate, cebola roxa, bacon e maionese especial no autêntico pão brioche.', p: 41.90 },
      { n: 'Frango Especial', d: 'Burguinho de frango frito empanado (150g), queijo prato, requeijão Scalla, maionese especial, bacon e cebola roxa no pão tradicional.', p: 41.90, de: 46.90, tag: 'Edição limitada' }
    ]
  },
  {
    id: 'combos', nome: 'Combos', curto: 'Combos',
    intro: 'Lanche + refrigerante lata 350ml + batata frita individual.',
    itens: [
      { n: 'Combo Burger', d: '1 Cheese Burger + 1 refrigerante lata 350ml + 1 batata frita individual.', p: 54.90, de: 59.30 },
      { n: 'Combo Americano', d: '1 Americano + 1 refrigerante lata 350ml + 1 batata individual.', p: 59.90, de: 65.30 },
      { n: 'Combo Bacon', d: '1 Cheese Bacon + 1 refrigerante lata 350ml + 1 batata individual.', p: 59.90, de: 65.30 },
      { n: 'Combo Texas Bacon', d: '1 Texas Bacon + 1 refrigerante lata 350ml + 1 batata individual.', p: 64.90, de: 70.30 },
      { n: 'Combo Supremo', d: '1 Frango Supremo + 1 batata frita + 1 refrigerante lata 350ml.', p: 51.90, de: 58.30 }
    ]
  },
  {
    id: 'porcoes', nome: 'Batata, nuggets e molho', curto: 'Porções',
    intro: 'Batata crocante e sequinha — até mesmo no delivery.',
    itens: [
      { n: 'Batata Frita', foto: 'img/fritas.webp', d: 'Crocante e sequinha até mesmo no delivery. Serve 1 pessoa.', p: 12.90 },
      { n: '3 Batatas com 15% OFF', d: 'Crocante e sequinha até mesmo no delivery. Serve até 3 pessoas.', p: 32.90, de: 38.70, tag: 'Oferta' },
      { n: 'Nuggets Supreme', foto: 'img/nuggets.webp', d: '12 unidades.', p: 23.90 },
      { n: '36 Nuggets com 15% OFF', d: '36 unidades com 15% de desconto.', p: 59.90, de: 71.70, tag: 'Oferta' },
      { n: 'Maionese Especial', d: 'Porção individual de maionese. Serve 1 pessoa.', p: 5.00 }
    ]
  },
  {
    id: 'bebidas', nome: 'Bebidas e sobremesa', curto: 'Bebidas',
    intro: 'Pra acompanhar e pra fechar.',
    itens: [
      { n: 'Coca-Cola', d: 'Lata 350ml.', p: 8.50 },
      { n: 'Coca-Cola Zero', d: 'Lata 350ml.', p: 8.50 },
      { n: 'Guaraná', d: 'Lata 350ml.', p: 8.50 },
      { n: 'Guaraná Zero', d: 'Lata 350ml.', p: 8.50 },
      { n: 'Água sem gás', d: '500ml.', p: 6.00 },
      { n: 'Água com gás', d: '510ml.', p: 6.00 },
      { n: 'Brownie de Chocolate', d: 'Brownie cremoso de chocolate.', p: 14.90, tag: 'Sobremesa' }
    ]
  }
];
