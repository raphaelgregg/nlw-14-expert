import { CATEGORIES, MENU } from '../utils/data/products.js';

const categories = document.querySelector('#categories');
const templateCategories = document.querySelector('#template-categories');

const products = document.querySelector('#products');
const templateProducts = document.querySelector('#template-products');

// Create component list category
const categoryList = templateCategories.content.cloneNode(true);

for(let category of CATEGORIES) {  
  const li = categoryList.querySelector('ul li').cloneNode(true);
  li.querySelector('a').textContent = category
  li.querySelector('a').href = `#${category}`
  
  categoryList.querySelector('ul').appendChild(li);
}

categoryList.querySelector('ul li').remove();
categories.appendChild(categoryList);

// Create component card list
for(const item of MENU) {
  const productItem = templateProducts.content.cloneNode(true);
  productItem.querySelector('h4').textContent = item.title;
  productItem.querySelector('h4').setAttribute('id', item.title)

  for(let product of item.data) {
    const dt = productItem.querySelector('dl dt').cloneNode(true);
    dt.querySelector('img').src = product.thumbnail;
    dt.querySelector('p').textContent = product.description;
    dt.querySelector('.title').textContent = product.title;
    productItem.querySelector('dl').appendChild(dt);
  }

  productItem.querySelector('dl dt').remove();
  
  products.appendChild(productItem);
}