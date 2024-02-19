import './styles.css';

export function Header(handleOpenCard) {
  return `
    <header>
      <div class="header-wrapper">
        <img src="./src/assets/svg/logo.svg" alt="logo nlw expert">
        <h4 class="title">Header</h4>
      </div>
      
      <button class="bag-shopping"onclick='${() => handleOpenCard()}'>
        <img src="./src/assets/svg/shopping-bag.svg" alt="icone de bolsa" /> 
      </button>
  </header>
  `;
}

