//pessoa -> 123 [endereço de memória] -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)
//o que não muda é o endereço de memória

//agora tentando fazer a constante receber um novo objeto (novo endereço de memória)
//pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana' } erro

//Congela objeto e não permite mais alterar/incluir/excluir nenhum atributo
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome) //continua sendo Pedro

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)