export default class Pessoa { // --> Utilizando o sistema de módulos do EcmaScript (que o Webpack reconhece)
// module.exports = class Pessoa { --> Utilizando o sistema de módulos do Commons.js (utilizado pelo Node.js)
    cumprimentar() {
        return 'Bom dia!'
    }
}