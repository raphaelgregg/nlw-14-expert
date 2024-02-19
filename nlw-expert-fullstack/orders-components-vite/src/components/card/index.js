import './styles.css';

export function Card(object, handleOpenProduct) {
  
  return `
    <dl>
      <dt class="card-item" onclick="${handleOpenProduct()}">
        <img src="${object.thumbnail}" alt="imagem de hamburguer">          
        
        <div class="card-info">
          <p class="title">${object.title}</p>
          <p>${object.description}</p>
        </div>
        </dt>
    </dl>
  `;
}