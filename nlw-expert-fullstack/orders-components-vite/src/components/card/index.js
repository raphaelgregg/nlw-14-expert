import './styles.css';

export function Card() {
  return `
    <dl>
      <dt class="card-item">
        <img src="../../assets/images/products/thumbnail/1.png" alt="imagem de hamburguer">          
        
        <div class="card-info">
          <p class="title">X-React</p>
          <p>Um hambúrger tão bonito que me deu fome enquanto eu fazia esse layout para o projeto...</p>
        </div>
      </dt>
    </dl>
  `;
}