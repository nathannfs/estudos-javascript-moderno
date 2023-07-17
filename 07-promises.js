// Promises -  ela recebe uma função de callback que é síncrona
// enquanto não usar o resolve ou reject, essa promise vai ficar pendente
// para pegar os resultados dessa chamada temos duas formas, then/catch ou async/await
const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Sucesso!');
    reject('Erro!');
  }, 1000);
});

// Primeira forma de trabalhar com promises
// recebe uma função como único argumento, o '.then' vai executar como se fosse nosso resolve
apiCall
  .then((resposta) => {
    console.log(resposta);
  })
  // funciona da mesma forma que o '.then' só que ele recebe o erro em vez da resposta, então ele executa como se fosse o reject
  .catch((erro) => {
    console.log(erro);
  });

// esse log da primeiro do que a resposta do .then
console.log('Depois da promise');

// Segunda forma de trabalhar com promises
// quando adiciona o await, ela vai manter essa promise na call stack até ela ser resolvida
// mas para usar isso precisamos estar dentro de uma função assíncrona
// para pegar os erros precisamos usar o bloco try catch
// o javascript vai deixar parado até essa linha ser resolvida, então nada que estiver embaixo dela vai ser executada enquanto ela não for resolvida
async function run() {
  try {
    const resposta = await apiCall;
    console.log(resposta);
    console.log('Depois da promise');
  } catch (erro) {
    console.log(erro);
  }
}

run();

// A diferença das duas é que quando usamos o '.then e .catch' nosso código não fica travado
