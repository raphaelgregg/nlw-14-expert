import { Category } from '../../components/category/index.js';
import { Header } from '../../components/header/index.js';
import { MenuList } from '../../components/menuList/index.js';

import './styles.css';

import { CATEGORIES, MENU } from '../../utils/data/products.js';


export function Home() {  
  return `
    ${Header()}
    
    <div class="line"></div>
    
    <main>
      ${Category(CATEGORIES)}

      <div class="products">
      ${MenuList(MENU)}
      </div>
    </main>

  `
}