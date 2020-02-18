let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) //antes da comparação incrementa o num1, e após a comparação incrementa o num2, por isso resultado verdadeiro
console.log(num1 === num2)