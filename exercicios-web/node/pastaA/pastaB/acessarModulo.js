//Importando módulo criado dentro do projeto
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const c = require('./pastaC/index') //Ou './pastaC' --> por padrão ele busca pelo arquivo index
console.log(c.ola2)

//Módulo interno do node, nesse caso não precisa passar caminho relativo
/*const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)*/