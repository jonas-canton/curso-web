const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona elemento na última posição
console.log(pilotos)

pilotos.shift() //Remove primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona elemento na primeira posição
console.log(pilotos)

//splice pode adicionar e remover elementos
//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
//Remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Retorna novo array a partir do índice passado por parâmetro
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

