//let e const
{
    var a = 2 //var tem escopo de função e global
    let b = 3 //let tem escopo de bloco
    console.log(b)
}
console.log(a)

//Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

//Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2, 3] //[x, , y] --> dessa forma o elemento 2 seria ignorado
console.log(x, y)

const { idade, nome } = { nome: 'Ana', idade: 9 } //Para desestruturar atributos de objetos, usa-se chaves
console.log(idade, nome)
//Ou...
const { idade: i, nome: n } = { nome: 'Ana', idade: 9 } 
console.log(i, n)