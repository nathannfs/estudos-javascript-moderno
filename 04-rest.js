// Rest Operator -
const user = {
  firstName: 'Nathan',
  lastName: 'Santos',
  full_name: 'Nome Completo',
  age: 22,
  instagram: '@nathannfs',
  skills: ['Back-End', 'Front-End', 'Mobile', 'UX/UI'],
};

// Rest Operator - resto do objeto - usamos '...', ele sempre precisa ser a última variável a ser declarada na desestruturização
const { firstName, skills, ...restoUser } = user;
const [primary, ...restoSkills] = skills;

console.log(restoUser);
console.log(restoSkills);
