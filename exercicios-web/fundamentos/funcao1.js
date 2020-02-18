//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //NaN, porque o segundo parâmetro é "undefined"
imprimirSoma(2, 10, 4, 5) //ignora os demais parâmetros excedentes
imprimirSoma() //NaN, porque os dois parâmetros são "undefined"

//Função com retorno
function soma(a, b = 1) { //Por default o valor do b é 1
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))

