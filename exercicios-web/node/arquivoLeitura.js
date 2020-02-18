const fs = require('fs') //FileSystem, vem previamente instalado no Node.js

const caminho = __dirname + '/arquivo.json'

//Síncrono... (só libera o Event Loop no final do processamento)
const conteudo = fs.readFileSync(caminho, "utf-8") //O arquivo foi escrito com esse encode, por isso precisa ser lido também com esse encode
console.log(conteudo)

//Assíncrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//Quando é um arquivo JSON, pode-se utilizar diretamente o "require"
const config = require('./arquivo.json') //Nesse caso, como não é um arquivo JS, precisa passar a extensão do arquivo
console.log(config.db) //O require já retorna convertido em objeto

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})