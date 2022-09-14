//# Exercício 1

//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

/*
function imprimir (x) {
     console.log(`Olá, ${x}!`)
}

imprimir("Édipo")
*/

//b) Declare uma função que imprima a tabuada do 6. Chame esta função.
/*
function tabuadaDoSeis (valor) {
    for (let i = 1 ; i <= 10; i++) {
    console.log(`${valor} x ${i} = ${valor*i}`)
    }
}
tabuadaDoSeis(6)
*/

//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__

const imprimirNome = (x) => {
    console.log(`Olá, ${x}!`)
}
imprimirNome("Édipo")


const tabuadaDoSeis = (valor) => {
    for (let i = 1 ; i <= 10; i++){
    console.log(`${valor} x ${i} = ${valor*i}`)
    }
}
tabuadaDoSeis(6)
