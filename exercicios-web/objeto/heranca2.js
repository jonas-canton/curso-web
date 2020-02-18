//Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0' //Evitar esse tipo de manipulação
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
  velAtual: 0,
  velMax: 200,
  aceleraMais(delta) {
    if (this.velAtual + delta <=this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324 //shadowing (sombreamento/sobrescrita)
}

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}` //O super referencia o objeto pai
  }
}

Object.setPrototypeOf(ferrari, carro) //Estabelece relação entre ferrari e carro (ferrari tem carro como protótipo)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())