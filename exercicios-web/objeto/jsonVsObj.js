const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) ERRO
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) ERRO
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))

//No JSON, tanto os nomes dos atributos quanto os valores string precisam estar entre aspas duplas