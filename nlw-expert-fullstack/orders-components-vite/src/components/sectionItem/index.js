import './styles.css';
import { Card } from '../card/index.js';


export function SectionItem(Data) {
  
  // for(item of Data) {
  //   console.log(item)
  // }

  const showCards = Card();



  return `
    <div class="section-products">
      <h4>Lanche do dia</h4>

      ${showCards}
      ${showCards}
      ${showCards}
      ${showCards}
      ${showCards}
    </div>
  `;
}