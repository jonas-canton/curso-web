const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

//a delimitação de um templateString é o backtick (o símbolo da crase)
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

//expressões...
console.log(`1 + 1 = ${1 + 1}`)

//função arrow
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)




