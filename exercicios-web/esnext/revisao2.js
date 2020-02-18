//Arrow Function
//Vantagens: sintaxe reduzida; funções numa única linha
//Quando não tem corpo da função, o return é chamado implicitamente
//São sempre funções anônimas, o máximo que se pode fazer é atribuir ela a uma variável
//Quando se tem apenas um parâmetro, os parênteses não são obrigatórios
const soma = (a, b) => a + b
console.log(soma(1, 1))

//Arrow Function e this
//O this de uma função arrow está associado ao local no qual a função foi escrita
//Call e Apply não funcionam em Arrow Function
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//Parâmetro default
function log(texto = 'Node') {
    console.log(texto)
}
log()
log('Sou mais forte!')

//Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))