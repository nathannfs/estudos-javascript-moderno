const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1001, quantity: 5 },
];

// .find - serve para buscar dentro do array alguma coisa
// ela recebe uma função de callbac
// ele percorre item por item e vai iterando, no momento em que retorna true pra condicional, o elemento que ele ta iterando no momento vai pra dentro da variável
const find = array.find(
  (product) =>
    // se o item for true, ele vai pegar o elemento e jogar dentro da variável find
    // porém no primeiro momento que ele der true, ele já para a aplicação
    product.price > 1000
);
// console.log({ find });

// .findIndex - é exatamente a mesma coisa que o .find, mas ele retorna o index do objeto, ou seja ele retorna a posição que aquele objeto está
// assim como o .find, depois do primeiro true ele ja para a aplicação
const findIndex = array.findIndex((product) => product.name === 'MacBook Pro');
// console.log({ findIndex });
// console.log('Produto:', array[findIndex]);

// --------------------------------------------------------------

// .some - ele verifica se algum elemento do array bate com a condição que colocarmos dentro dele
// ele retorna um boolean, porque verificamos se algum item do array bate com a condição que colocarmos
const some = array.some((product) => product.price < 1000);

// console.log({ some });

// .every - ele é praticamente igual o .some, porém ele verifica se todos os elementos do array cumprem a condição
const every = array.every((product) => product.price > 1000);

// console.log({ every });

// --------------------------------------------------------------

// .map - ele serve para pegar o array de um jeito e criar um novo baseado nesse anterior mas com alguma modificação que queremos ou não fazer
// o retorno dele será sempre um array com o mesmo número de posições do array base
const map = array.map((product) => ({
  // spread
  ...product,
  // adionando novo elemento no array
  subtotal: product.quantity * product.price,
}));

// console.log({ map });

// está sendo executado pelo map internamente
// cria um novo array
// const novoArray = [];
// dentro da primeira posição dele, ele pega o retorno da função e joga dentro do novo array, e assim sucessivamente em todas as posições do array
// novoArray[index] = mapeiaArray(array[index]);

// --------------------------------------------------------------

// .filter - ele serve para filtrar nosso array, podemos passar uma validação para tirar alguns elementos de nosso array que retornem true com essa validação
// assim como o map ele cria um novo array com os elementos que retornarem true com a validação passada dentro dele
const filter = array.filter((product) => product.quantity > 2);

// console.log({ filter });

// --------------------------------------------------------------

// .reduce - serve para pegar o array e transformar ele em outro tipo de dado
// ele pega o array e reduz ele para um número inteiro
// ele recebe dois argumentos - (função que recebe accumulator e current (product)) e o valor inicial
const reduce = array.reduce((accumulator, product) => {
  // o accumulator navega entre todas as alterações que temos

  // a cada retorno ele sobrescreve sobre o accumulator
  return accumulator + product.price * product.quantity;

  // abaixo podemos passar o valor inicial
}, 0);

console.log({ reduce });
