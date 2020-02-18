const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`)
})

//mesma coisa de cima mas utilizando operador destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

//Para incluir uma nova propriedade com características
Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true, //se é um atributo que pode ser listado (ex.: Object.keys)
  writable: false, //não permite ser alterada
  value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ES 6)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) //resulta num objeto com a concatenação de todos os atributos dos outros objetos passados por parâmetro (pode-se passar quantos objetos quiser por parâmetro)
console.log(dest)

Object.freeze(obj)
obj.c = 1234
console.log(obj)