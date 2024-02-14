import { PEDIDO } from '../utils/data/products.js';

const cartProducts = document.querySelector('#cart-products') 
const templateCartProducts = document.querySelector('#template-cart-products');

console.log(PEDIDO);
// Create component CART ITEM list
for(const item of PEDIDO) {
  const productItem = templateCartProducts.content.cloneNode(true);
  // productItem.querySelector('h4').textContent = item.title;
  // productItem.querySelector('h4').setAttribute('id', item.title)

  for(let product of item.data) {
    const dt = productItem.querySelector('dl dt').cloneNode(true);
    dt.querySelector('img').src = product.thumbnail;
    dt.querySelector('p').textContent = product.description;
    dt.querySelector('.title').textContent = product.title;
    productItem.querySelector('dl').appendChild(dt);
  }

  productItem.querySelector('dl dt').remove();
  
  cartProducts.appendChild(productItem);
}