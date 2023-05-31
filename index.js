// Solicitar entrada do usuário
const input = prompt("Digite um valor:");

// Verificar se a entrada é um número
if (!isNaN(parseFloat(input))) {
  // Converter a entrada em número
  const number = parseFloat(input);

  // Realizar operações matemáticas
  const sum = number + 5;
  const square = number * number;

  // Exibir os resultados no console
  console.log("O número digitado é: " + number);
  console.log("O número + 5 é: " + sum);
  console.log("O número ao quadrado é: " + square);
} else {
  // Caso a entrada não seja um número, realizar concatenação
  var text = "Olá, " + input + "!";

  // Exibir o resultado no console
  console.log(text);
}