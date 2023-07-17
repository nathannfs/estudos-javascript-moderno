// Parâmetros Default - se for executado a função sem passar nada de parâmetro, é exibido o valor padrão

// assim conseguimos atribuir um valor padrão para o parâmetro
function printGreetings(message = 'Mensagem padrão') {
  console.log(message);
}

printGreetings();
