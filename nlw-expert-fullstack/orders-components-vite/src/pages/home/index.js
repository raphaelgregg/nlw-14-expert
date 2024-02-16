import { Header } from '../../components/header/index.js';
import { Category } from '../../components/category/index.js';
import { SectionItem } from '../../components/sectionItem/index.js';

import './styles.css';

import { CATEGORIES, MENU } from '../../utils/data/products.js';


export function Home() {
  const showCategories = Category(CATEGORIES);
  const showSectionItems = SectionItem(MENU);
    
  return `
    ${Header()}
    
    <div class="line"></div>
    
    <main>
      ${Category(CATEGORIES)}

      ${SectionItem(MENU)}
    </main>

  `
}