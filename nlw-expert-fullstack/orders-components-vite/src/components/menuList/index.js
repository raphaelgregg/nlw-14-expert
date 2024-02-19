import { Card } from '../card/index.js';
import './styles.css';

export function MenuList(object, handleOpenProduct) {
  const sectionList = object.map((item) => {
    
    const card = item.data.map((data) => {
      return Card(data, handleOpenProduct);
    }).join('');

    return `
      <div id="${item.title}" class="section-products">
        <h4>${item.title}</h4>

        ${card}
      </div>
    `
  }).join('');

  return sectionList;
}