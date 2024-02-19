// Estrutura de objetos
const perguntas = [
  {
    pergunta: "Qual é o nome da protagonista humana da série Monster High?",
    respostas: [
      "Draculaura",
      "Frankie Stein",
      "Cleo de Nile"
    ],
    CORRETA: 1 // Frankie Stein
  },
  {
    pergunta: "Qual é a filha do Conde Drácula em Monster High?",
    respostas: [
      "Frankie Stein",
      "Draculaura",
      "Lagoona Blue"
    ],
    CORRETA: 1 // Draculaura
  },
  {
    pergunta: "Qual é o nome da escola frequentada pelos monstros em Monster High?",
    respostas: [
      "Escola Noturna",
      "Escola de Monstros",
      "Monster High"
    ],
    CORRETA: 2 // Monster High
  },
  {
    pergunta: "Quem é conhecido como 'O Monstro da Lagoa' em Monster High?",
    respostas: [
      "Frankie Stein",
      "Lagoona Blue",
      "Clawdeen Wolf"
    ],
    CORRETA: 1 // Lagoona Blue
  },
  {
    pergunta: "Qual é a filha do Lobisomem em Monster High?",
    respostas: [
      "Draculaura",
      "Clawdeen Wolf",
      "Ghoulia Yelps"
    ],
    CORRETA: 1 // Clawdeen Wolf
  },
  {
    pergunta: "Quem é a filha de um zumbi em Monster High?",
    respostas: [
      "Ghoulia Yelps",
      "Cleo de Nile",
      "Lagoona Blue"
    ],
    CORRETA: 0 // Ghoulia Yelps
  },
  {
    pergunta: "Qual é a filha da Múmia em Monster High?",
    respostas: [
      "Cleo de Nile",
      "Draculaura",
      "Frankie Stein"
    ],
    CORRETA: 0 // Cleo de Nile
  },
  {
    pergunta: "Qual é o nome da filha do Fantasma em Monster High?",
    respostas: [
      "Cleo de Nile",
      "Ghoulia Yelps",
      "Spectra Vondergeist"
    ],
    CORRETA: 2 // Spectra Vondergeist
  },
  {
    pergunta: "Quem é conhecido como 'A Górgona' em Monster High?",
    respostas: [
      "Lagoona Blue",
      "Cleo de Nile",
      "Deuce Gorgon"
    ],
    CORRETA: 2 // Deuce Gorgon
  },
  {
    pergunta: "Qual é a filha do Monstro do Mar em Monster High?",
    respostas: [
      "Lagoona Blue",
      "Spectra Vondergeist",
      "Clawdeen Wolf"
    ],
    CORRETA: 0 // Lagoona Blue
  }
];

  //procurar a base do html (quiz{procura o ID /template(procura as tags html))
  const quiz =document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set ()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  
  // Repete e cria a constante item para cada segmento do Objeto
  for(const item of perguntas) {
  
   // a costante quizitem recebe o conteudo clonado do template 
    const quizitem = template.content.cloneNode(true)
  
    //Procura o H3 o substitui pelo item.pergunta
    quizitem.querySelector('h3').textContent = item.pergunta
  
    //Cria e repete a variavel resposta para cada elemento do atributo respostas 
  for (let resposta of item.respostas ) {
    
   // A variavel dt recebe o conteudo do quizitem (template) de "dl" ate "dt" e pede para clonar ele
   const dt = quizitem.querySelector('dl dt').cloneNode(true)
    
    // Procura o contudo de texto de "span" e o substitui pela "resposta"
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-'+ perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.CORRETA
     
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  //coloca a formatação das respostas desde o tag "dl" e coloca o filho "dt"
    quizitem.querySelector('dl').appendChild(dt)
  
  // retira o elemento de texto do "dt" ( no caso resposta A)
  }
  quizitem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizitem)
  }