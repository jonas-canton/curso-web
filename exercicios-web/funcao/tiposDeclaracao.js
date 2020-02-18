console.log(soma(3, 4))

// function declaration
// dessa forma o interpretador carrega todas funções
// antes de executar o arquivo,
// sendo assim posso declará-la no final do arquivo
// e usá-la no começo do arquivo
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x + y
}