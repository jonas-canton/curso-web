const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } //antes do ES 6
const obj2 = { a, b, c } //no EC 6 em diante
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
  //antes do ES 6
  funcao1: function() {
    //...
  },
  //a partir do ES 6
  function2() {
    //...
  }
}

console.log(obj5)