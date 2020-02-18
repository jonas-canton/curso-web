console.log('a = ', a)
var a = 2 //a variável 'a' será "içada" (jogada pra cima). Isso é hoisting
console.log('a = ', a)

console.log('b = ', b)
let b = 2 //com let o efeito de "içamento" não funciona
console.log('b = ', b)