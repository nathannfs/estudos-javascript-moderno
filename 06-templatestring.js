// Template String - crase que usamos '``', ela tem o mesmo resultado final que as aspas simples ou duplas

// Diferença 1
// aspas simples e duplas não pode ter quebra de linha, já no template string pode

// console.log(`Esta é a primeira linha
// Esta é a segunda linha`);

// Diferença 2
// template string permite que façamos interpolação de variáveis
const name = 'Nathan';

console.log(`Seja bem-vindo ${Math.random() > 0.5 ? 'Sim' : 'Não'}`);
