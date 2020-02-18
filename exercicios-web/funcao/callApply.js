function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.2 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//Sempre primeiro é o contexto, em seguida os parâmetros da função que ele vai passar pra função
console.log(getPreco.call(carro, 0.17, '$'))

//A diferença do apply é que os parâmetros são passados todos dentro de um array
console.log(getPreco.apply(carro, [0.17, '$']))
console.log(getPreco.apply(global, [0.17, '$']))