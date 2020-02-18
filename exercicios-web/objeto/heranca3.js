const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) //Coloca pai como protótipo
//filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
  nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) //Lista apenas propriedades do próprio objeto, não os que vieram de herança
console.log(Object.keys(filha2))

for (let key in filha2) {
  filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}