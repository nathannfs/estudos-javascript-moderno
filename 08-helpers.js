const tech = 'Node.js';
const array = ['Node.js', 'React', 'TypeScript'];

// .includes - ela verifica se dentro de uma string ou array, existe alguma coisa que ta passando pra dentro dela
// ele é case sensitivy
const includesString = tech.includes('ode');
// console.log({ includesString });

// a única diferença de array é que ele não procura pedaços da nossa string, precisamos passar o nome exato
const includesArray = array.includes('React');
// console.log({ includesArray });

// .startsWith - segue o mesmo esquema que o '.includes', mas ele verifica se alguma string começa com alguma coisa que passarmos dentro dela
const startsWith = tech.startsWith('N');
// console.log({ startsWith });

// .endsWith - ele verifica se alguma string termina com alguma coisa que passarmos dentro dela.
const endsWith = tech.endsWith('.js');
console.log({ endsWith });
