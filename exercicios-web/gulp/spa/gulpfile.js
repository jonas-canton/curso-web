const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence') //Por padrão o gulp pode executar tarefas de forma paralela, o run-sequence faz com que ele execute de forma sequencial

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', () => {
    if (util.env.production) {
        sequence('deps', 'app')
        // gulp.start('deps', 'app') --> Forma padrão
    } else {
        sequence('deps', 'app', 'servidor')
        // gulp.start('deps', 'app', 'servidor') --> Forma padrão
    }
})