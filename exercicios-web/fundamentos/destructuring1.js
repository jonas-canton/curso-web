//novo recurso introduzido no ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//tira de dentro do objeto o atributo "nome" e "idade"
const { nome, idade } = pessoa
console.log(nome, idade)

//tira de dentro do objeto o atributo "nome" e "idade" e coloca nas respectivas variáveis "n" e "i"
const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa //vai dar problema, pois só o último dado pode estar null ou undefined


