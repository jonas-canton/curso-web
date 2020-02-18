//um objeto em JS é uma coleção de pares chave x valor

//objeto criado dinamicamente
const prod1 = {} //objeto vazio sem atributos/funções
prod1.nome = 'Celular Ultra Mega' //cria dinamicamente a propriedade dentro do objeto
prod1.preco = 4998.9
prod1['Desconto Legal'] = 0.4 //evitar atributos com espaço

console.log(prod1)

//notação literal de objetos
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.9
}

//exemplo de json
//json não é a mesma coisa que objeto
//{ "nome": "Camisa Polo", "preco": 79.9 }

console.log(prod2)




