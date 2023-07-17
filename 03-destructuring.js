// Desestruturização -
const user = {
  firstName: 'Nathan',
  lastName: 'Santos',
  full_name: 'Nome Completo',
  age: 22,
  instagram: '@nathannfs',
  skills: ['Back-End', 'Front-End', 'Mobile', 'UX/UI'],
};

// em objetos puxamos o valor com o nome da propriedade dentro do objeto
const { firstName, age, skills } = user;

console.log(firstName, age, skills);

// com arrays colocamos as variáveis na ordem dos valores que queremos que cada uma receba
// por exemplo - primary recebe 'Back-End' ; secundary recebe 'Front-End' e assim por diante
// se tentarmos pegar uma posição que não existe, retorna undefined
const [primary, secundary, tertiary, quaternary] = skills;

console.log(secundary);

// se quisermos renomear o valor de alguma propriedade de um objeto
const { full_name: fullName } = user;

console.log(fullName);
