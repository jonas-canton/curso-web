const schedule = require('node-schedule')

//Para executar de 5 em 5 segundos, em qualquer minuto, às 21 horas, qualquer dia do mês, qualquer mês, na quarta-feira
const tarefa1 = schedule.scheduleJob('*/5 * 21 * * 3', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000) //20 segundos

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] //De segunda a sexta
regra.hour = 21
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})

/*
    Temporizadores do próprio JavaScript:
    setTimeout
    setImediate --> o mesmo que setTimeout mas com valor de tempo zerado
    setInterval --> disparar função de tempos em tempos
*/


