//# Exercício 2
//Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. 
// Invoque a função e imprima no console o resultado.
/*
function calculoDoisNum (n1,n2) {
    console.log(`${n1} + ${n2} = ${n1 + n2}`)
}

calculoDoisNum(Number(prompt("Infirme o primeiro numero:")), +prompt("Informe o segundo numero:"))
*/

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
/*
function validaNumero (n1,n2){
    console.log(`${n1} é maior que ${n2}? ${n1>=n2}`)
}

validaNumero(Number(prompt("informe o primeiro numero")), Number(prompt("Informe o segundo numero")))
*/

// c) Uma função que receba um número e imprima se ele é par ou não

/*
function verificaPar (n1) {
    if(n1%2 === 0) {
        console.log(`${n1} é um numero par`)
    } else {
        console.log(`${n1} é um numero impar`)
    }
}
verificaPar(Number(prompt("Informe um numero")))
*/

// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
//juntamente com uma versão dela contendo apenas letras maiúsculas.

function mensagem(texto) {
    console.log(`Sua mensagem possui ${texto.length} caracteres`)
    console.log(texto.toLocalUpperCase)
}
mensagem(prompt("Digite o texto"))
