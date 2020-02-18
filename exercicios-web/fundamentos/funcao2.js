//Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//Retorno implícito (quando se tem apenas uma única sentença de código)
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a) //Se tem apenas 1 parâmetro, não precisa estar entre parêntesis
imprimir2('Legal!!!')