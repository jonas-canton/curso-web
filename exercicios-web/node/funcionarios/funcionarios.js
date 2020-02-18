const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //Desafio: mostrar a mulher chinesa com menor salário

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    
    console.log(func)

    //Minha solução abaixo:
    /*const apenasMulheres = obj => obj.genero === 'F'
    const apenasChinesas = obj => obj.pais === 'China'
    const mulheresChinesas = funcionarios.filter(apenasMulheres).filter(apenasChinesas)

    const menorSalario = (acumulador, atual) => acumulador < atual ? acumulador : atual

    const apenasSalarios = obj => obj.salario
    const valorMenorSalario = mulheresChinesas.map(apenasSalarios).reduce(menorSalario)

    const mulherChinesaMenorSalario = obj => obj.salario === valorMenorSalario

    console.log(mulheresChinesas.filter(mulherChinesaMenorSalario))*/
})

