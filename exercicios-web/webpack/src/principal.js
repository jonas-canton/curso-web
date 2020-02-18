import Pessoa from './pessoa' // --> Utilizando o sistema de módulos do EcmaScript (que o Webpack reconhece)
// const Pessoa = require('./pessoa') --> Utilizando o sistema de módulos do Commons.js (utilizado pelo Node.js)
import './modulos/moduloA'
import './assets' //Sem especificar o arquivo, ele importa o arquivo de nome index.js

const atendente = new Pessoa
console.log(atendente.cumprimentar())