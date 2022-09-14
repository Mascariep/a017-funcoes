//# Exercício 3

// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das 
// operações básicas (soma, subtração, multiplicação e divisão).

//Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
//Por fim, imprima no console o resultado das operações

let pedidoNum1 = +prompt("Digite primeiro numero:");
let pedidoNum2 = +prompt("Digite primeiro numero:");

function adicao(num1, num2) {
    console.log(num1 + num2)
}
adicao(pedidoNum1, pedidoNum2)

function subtracao(num1, num2) {
    console.log(num1 - num2)
}
subtracao(pedidoNum1, pedidoNum2)

function multiplicacao(num1, num2) {
    console.log(num1 * num2)
}
multiplicacao(pedidoNum1, pedidoNum2)

function divisao(num1, num2) {
    console.log(num1 / num2)
}
divisao(pedidoNum1, pedidoNum2)

