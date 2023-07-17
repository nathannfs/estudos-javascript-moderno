// import sayHello from './sayHello.js';

// quando utilizamos o modo de ter que dar o mesmo nome que a função na hora de importar
// import { sayHello } from './sayHello.js';
// para conseguir renomear na hora de fazer importação usamos o 'as'
import userName, { sayHello as novoNome } from './sayHello.js';

novoNome(userName);

// existem formas de conseguir usar essa sintaxe
// uma delas é mudando a extensão para 'mjs' e passar essa extensão na hora de importar
// outra forma é colocando a extensão 'js' na hora de importar e criando um arquivo package.json e passando o código abaixo
// {
//   "type": "module"
// }
