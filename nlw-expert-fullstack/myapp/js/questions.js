// DATA - base dados
const perguntas = [
  {
    pergunta: "Qual é a finalidade do comando 'console.log()' em JavaScript?",
    respostas: [
      "Exibir uma mensagem de erro",
      "Imprimir dados no console",
      "Criar uma variável"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do operador '===' em comparações em JavaScript?",
    respostas: [
      "Comparação de valores sem considerar o tipo",
      "Atribuição de valores",
      "Comparação estrita de valores e tipos"
    ],
    correta: 2
  },
  {
    pergunta: "Como se declara uma variável em JavaScript?",
    respostas: [
      "let myVar;",
      "const myVar = 10;",
      "ambas as opções acima estão corretas"
    ],
    correta: 2
  },
  {
    pergunta: "O que é uma função em JavaScript?",
    respostas: [
      "Um tipo de dado",
      "Um bloco de código reutilizável",
      "Uma variável global"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
    respostas: [
      "Nenhuma, são sinônimos",
      "let é usado para valores constantes, const para variáveis",
      "let permite reatribuição, const cria variáveis imutáveis"
    ],
    correta: 2
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Um método de criptografia",
      "Um modelo de objeto para manipular documentos HTML",
      "Uma linguagem de programação"
    ],
    correta: 1
  },
  {
    pergunta: "Como se realiza uma iteração sobre os elementos de um array em JavaScript?",
    respostas: [
      "Usando a estrutura 'if-else'",
      "Com a declaração 'switch'",
      "Utilizando loops como 'for' ou 'forEach'"
    ],
    correta: 2
  },
  {
    pergunta: "O que é o JSON em JavaScript?",
    respostas: [
      "Um método de formatação de texto",
      "Uma linguagem de estilização",
      "Um formato de dados leve e intercambiável"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
    respostas: [
      "São iguais, usados de forma intercambiável",
      "'null' representa a ausência de valor, 'undefined' é atribuído explicitamente",
      "Ambos representam valores vazios"
    ],
    correta: 1
  },
  {
    pergunta: "Como se adiciona um evento a um elemento HTML usando JavaScript?",
    respostas: [
      "Apenas com CSS",
      "Usando o atributo 'event'",
      "Através do método 'addEventListener'"
    ],
    correta: 2
  },
];

// VARIABLES
const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

// "new" criar estruturas, objetos novos, "Set()" guarda conjunto informações sem repetir informação
const corrects = new Set();
const totalQuestions = perguntas.length;
const showTotalHits = document.querySelector('#hits span');

showTotalHits.textContent = `${corrects.size} de ${totalQuestions}`;



// loop ou laço de repetição
for(const item of perguntas) {
  // clonenode replica um nó e o arguimento TRUE adiciona os elementos filhos ao clone
  const quizItem = template.content.cloneNode(true);
  
  //altera a informação do nó H3 no template 
  quizItem.querySelector('h3').textContent = item.pergunta;
  
  // laço de repetição das perguntas inseridas no base de dados
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    dt.querySelector('span').textContent = resposta;

    // troca o atributo name"item" para "pergunta- + o index do array" 
    dt.querySelector('input').setAttribute('name', `pergunta-${perguntas.indexOf(item)}`);
    
    // adiciona um value para cada opção do input-radio
    dt.querySelector('input').value = item.respostas.indexOf(resposta);

    //verificar ação/evento que ocorre em tela, que seria a mudança de input
    dt.querySelector('input').onchange = (event) => {
      const correctQuestion = event.target.value == item.correta; // true ou false
      
      corrects.delete(item);
      // alert(correctQuestion)
      if(correctQuestion) {
        corrects.add(item)
      }
      // verifica quantidades de acertos
      // alert(corrects.size)

      showTotalHits.textContent = `${corrects.size} de ${totalQuestions}`;
    } 

    quizItem.querySelector('dl').appendChild(dt)
  }

  // Remove o template clonado para criação das perguntas no array
  quizItem.querySelector('dl dt').remove();
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem);
}
