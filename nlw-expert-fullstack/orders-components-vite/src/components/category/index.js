import './styles.css';

export function Category(Data) {
  //<li><a href="#">Linha 1</a></li>
  let li = '';
  for(let item of Data){
    li = li + `<li><a href="#${item}">${item}</a></li>`;
  }

  return `
    <nav>
      <ul>
      ${li}
      </ul>
    </nav>
  `;
};