// Estrutura de objetos
const perguntas = [
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas: [
        "var", 
        "let",
        "const"
      ],
      CORRETA: 2
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "console.log()"
      ],
      CORRETA: 2
    },
    {
      pergunta: "Qual símbolo é usado para comentários de uma linha em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "#"
      ],
      CORRETA: 0
    },
    {
      pergunta: "Qual é a função usada para converter uma string em um número em JavaScript?",
      respostas: [
        "parseString()",
        "parseInt()",
        "convertToNumber()"
      ],
      CORRETA: 1
    },
    {
      pergunta: "Qual operador é usado para comparar igualdade em valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      CORRETA: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "addToEnd()",
        "append()"
      ],
      CORRETA: 0
    },
    {
      pergunta: "Qual é o resultado de 5 + '3' em JavaScript?",
      respostas: [
        "8",
        "53",
        "NaN"
      ],
      CORRETA: 1
    },
    {
      pergunta: "Qual é o tipo de dado de uma variável que não foi atribuído a um valor em JavaScript?",
      respostas: [
        "undefined",
        "null",
        "empty"
      ],
      CORRETA: 0
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "removeLast()",
        "pop()",
        "deleteLast()"
      ],
      CORRETA: 1
    },
    {
      pergunta: "Qual símbolo é usado para acessar propriedades de um objeto em JavaScript?",
      respostas: [
        ".",
        "->",
        "::"
      ],
      CORRETA: 0
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