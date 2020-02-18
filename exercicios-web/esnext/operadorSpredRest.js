//Operador ... rest (juntar)/spread (espalhar)
//Usar rest com parâmetro de função

//Usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } //"Espalha" todos os parâmetros do objeto funcionario para dentro do objeto clone
console.log(clone)

//Usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'] //"Espalha" todos elementos do array grupoA dentro do array grupoFinal
console.log(grupoFinal)