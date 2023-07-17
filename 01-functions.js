// Diferenças entre função normal e arrow functions
// o contexto do 'this' muda de uma para outra
// this -> significa este
// função construtor- significa que esta função é um objeto, para chamar essa função usamos 'new', quando usamos new, podemos atribuir propriedades para esta função
// por padrão uma função normal retorna undefined

// Função normal - quando usamos essa função com this, ela vira uma função construtor
// function minhaFunction(){
//   // aqui temos o próprio this
//   // nesse caso dizemos que basicamente o this é o valor dessa função, então conseguimos atribuir propriedade para esta função usando ele
//   this.name = 'Nathan';

//   // Arrow function - precisamos armazenar ela dentro de uma variável
//   // neste caso nunca temos um construtor, então nunca podemos usar 'new'
// const minhaArrowFunction = () => {
//   // aqui temos o this do escopo onde foram criadas
//   this.lastName = 'Santos'
// };

// minhaArrowFunction();
// }

// console.log(new minhaFunction());
// console.log(this);
//------------------------------------------------
// Nas funções normais podemos usar Arguments e Rest como vemos abaixo

// Usando arguments - eles tem seus próprios arguments
// function soma(){
//   console.log(Object.values(arguments));
// }

// soma(1, 2, 3, 4, 5, 6, 7, 'Nathan');

// Usando Rest
// usando '...', pegamos todos os argumentos passados na hora de executar a função e coloca elas dentro de um array
// function soma(...argumentos){
//   console.log(primeiroParametro);
//   console.log(argumentos);
// }

// soma(1, 2, 3, 4, 5, 6, 7, 'Nathan');

// podemos também pegar o primeiro parâmetro e colocar o resto tudo no segundo
// function soma(primeiroParametro, ...argumentos){
//   console.log({primeiroParametro});
//   console.log({argumentos});
// }

// soma(1, 2, 3, 4, 5, 6, 7, 'Nathan');
//------------------------------------------------
// Nas arrow functions podemos utilizar só o Rest, herdando de onde foi criada
// const soma = () => {
//   console.log(arguments);
// }

// soma(1, 2, 3, 4, 5, 6, 7, 'Nathan');
//------------------------------------------------
// Formas de utilizar arrow functions

// Primeira - do modo convencional, utilizando chaves
const primeira = () => {
  console.log('Corpo da função');
};

primeira();

// Segunda - temos uma Short Syntax
// quando temos uma arrow function que queremos retornar alguma coisa simples dentro dela, que não exige um corpo para ela
const segunda = () => 'Hello World!';

console.log(segunda());

// Terceira - podemos fazer do mesmo jeito da segunda mas utilizando parênteses, podemos utilizar isso só para organização do código mesmo, não tem nada de demais
const algumNumero = 10;
const terceira = () =>
  algumNumero >= 10 ? 'Maior igual a 10' : 'Menor que 10';

console.log(terceira());

// Quarta - retornar um objeto diretamente, sem precisar ter um corpo, utilizamos parênteses em volta das chaves
const getUser = () => ({
  id: '123',
  name: 'Nathan',
});

console.log(getUser());
