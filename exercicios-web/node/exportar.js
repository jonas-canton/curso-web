//Premissa: somente o module.exports que é retornado no require
//Inicialmente, as 3 formas abaixo apontam para a mesma referência
console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

//Posso criar atributos no objeto que já vem por padrão
this.a = 1
exports.b = 2
module.exports.c = 3


exports = null //Já não aponta mais para a mesma referência do this e do module.exports
console.log(module.exports) //O valor de module.exports permanece

exports = {
    nome: 'Teste'
} //Isso não fará com que module.exports ou this passe a enxergar o mesmo objeto, pois nesse ponto o exports passou a referenciar outro endereço de memória

console.log(module.exports) //O valor de module.exports permanece

module.exports = { publico:true } //Para exportar um novo objeto, utilizar o module.exports.