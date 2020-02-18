const gulp = require('gulp')
const concat = require('gulp-concat') //Concatena vários arquivos em 1 só
// const uglify = require('gulp-uglify') //Tira os espaços em branco e outras compactações
const babel = require('gulp-babel')

gulp.task('default', () => {
    return gulp.src('src/**/*.js') //Pega todos os arquivos da pasta src ou subpastas que tenham extensão .js
        .pipe(babel({ //Converte (transpila) o código para uma versão que é suportada por todos ou a maioria dos browsers
            minified: true, //Compacta o arquivo (tira espaços etc)
            comments: false,
            presets: ["env"]
        }))
        // .pipe(uglify()) //Atualmente não suporta a última versão do ES
        // .on('error', function (err) { console.log(err) })
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
})
