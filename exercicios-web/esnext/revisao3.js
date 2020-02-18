//ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj)) //Retorna um array com os valores
console.log(Object.entries(obj)) //Retorna uma matriz de chave-valor

//Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome, //Cria atributo com nome "nome" e já atribui o valor da constante acima para ele. Antes tinha que ser nome: nome
    ola() { //Antes tinha que ser ola: function() {}
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class (internamente é convertido para função)
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}
console.log(new Cachorro().falar())