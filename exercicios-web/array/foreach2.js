const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//Minha solução:
/*Object.defineProperty(aprovados, 'forEach2', {
    value: function(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this)
        }
    },
    enumerable: false
})*/

//Solução do professor:
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}


aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
