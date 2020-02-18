require('./global')

console.log(MinhaApp.saudacao()) //Ou global.MinhaApp.saudacao()

MinhaApp.nome = 'Eita!' //Mudando valor global
console.log(MinhaApp.nome)