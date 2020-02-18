/*
    a constante 'a' não tem exatamente o conteúdo do objeto,
    mas sim o endereço de memória onde o objeto está localizado, ou seja,
    tem a referência do objeto
*/
const a = {name: 'Teste'}
console.log(a)

/*
    a constante 'b' não vai receber o conteúdo do objeto a,
    mas sim mesmo endereço no qual o 'a' aponta, ou seja,
    a constante 'a' e 'b' apontam pro mesmo lugar na memória
*/
const b = a
b.name = 'Opa'
console.log(a)
//o que houve acima é chamado é ATRIBUIÇÃO POR REFERÊNCIA


//para valores primitivos, o que acontece é uma cópia por valor
let c = 3
let d = c //nesse caso recebe o valor da variável, não a referência
d++
console.log(c)

let valor //não inicializada
console.log(valor) //imprime undefined

valor = null //inicializada, mas significa que não está apontando pra nenhum endereço de memória e não tem nenhum valor
console.log(valor)
//console.log(valor.toString()) //erro!

const produto = {}
console.log(produto.preco) //undefined
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined //evite atribuir de forma explícita o undefined
console.log(!!produto.preco)
//delete produto.preco //tira o atributo produto do objeto
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)



