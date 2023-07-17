function sayHello(name) {
  console.log(`Olá, ${name}`);
}

// export default sayHello;

// se na hora de importar quisermos que seja obrigado dar o nome que está aqui dentro usamos só export e passamos a função dentro de um objeto
export { sayHello };

const userName = 'Nathan';

export default userName;
