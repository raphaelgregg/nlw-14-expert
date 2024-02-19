import { Category } from '../../components/category/index.js';
import { Header } from '../../components/header/index.js';
import { MenuList } from '../../components/menuList/index.js';

import './styles.css';

import { CATEGORIES, MENU } from '../../utils/data/products.js';


export function Home() { 
  
  function handleOpenCart() {
    console.log('envio de função')
  }

  function handleOpenProduct() {
    window.location.href="./src/pages/product/index.js";
  }

  return `
    ${Header(handleOpenCart)}
    
    <div class="line"></div>
    
    <main>
      ${Category(CATEGORIES)}

      <div class="products">
      ${MenuList(MENU, handleOpenProduct)}
      </div>
    </main>

  `
}