// Spread Operator -
const user = {
  firstName: 'Nathan',
  lastName: 'Santos',
  age: 22,
  instagram: '@nathannfs',
  skills: ['Back-End', 'Front-End', 'Mobile', 'UX/UI'],
  active: false,
};

// Spread Operator - espalhar - a sintaxe dele é a mesma coisa que o do rest, só que nele não tem aquela regra de que tem sempre que ser colocado no final, só temos que tomar cuidado paranão sobrescrever o valor que queremos alterar em vez do contrário

// para mudar o valor de uma propriedade em um objeto podemos fazer deste jeito
// user.active = true;
// ou deste jeito usando assign que serve para fazer um mergin de dois objetos
// Object.assign(user, {active: true})
// só que fazendo isto estamos quebrando a imutabilidade que significa a gente nunca mudar um dado

// o jeito correto é este, clonando o objeto que queremos alterar a informação e só depois disso mudar a informação que queremos
// const updatedUser = {
//   firstName: user.firstName,
//   lastName: user.lastName,
//   age: user.age,
//   instagram: user.instagram,
//   skills: user.skills,
//   active: true,
// }

// mas uma maneira mais produtiva de fazer isso é utilizando o Spread Operator
const updatedUser = {
  // no JavaScript quando temos duas propriedade com o mesmo nome, a ultima é o que sempre vai prevalecer, então quando clonarmos o objeto que queremos alterar alguma informação, é só depois de clonar, passar a propriedade embaixo com o valor que queremos alterar
  ...user,
  // isso também funciona com arrays, aqui estamos utilizando array e dentro desestruturando os valores que tem dentro de skills, mas com isso agora podemos adicionar novos valores
  skills: [...user.skills, 'Marketing'],
  active: true,
};

// console.log({user});
console.log({ updatedUser });
