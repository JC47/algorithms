const fs = require('fs');
const argv = require('yargs')
    .command('numero', 'Numero de elementos a genrar', {
        descripcion: {
            demand: true,
            alias: 'n',
            desc: 'Especifica el numero de elementos a generar'
        }
    })
    .command('file', 'Nombre del fichero que se guardará', {
        descripcion: {
            demand: true,
            alias: 'p',
            desc: 'Especifica el nombre del archivo que se grabará'
        }
    })
    .help()
    .argv;

// N
let n = argv.numero || argv.n;
if(!n){
    n=1000;
}

// File
let f = argv.file || argv.f;
if(!f){
    f = "data"
}

let arr = [];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

for(let i = 0; i < n; i++){
    arr.push(getRandomInt(1,100));
}

let data = JSON.stringify(arr);
fs.writeFile(`../${f}.json`, data, (err) => {
    if (err) throw new Error('No se pudo grabar', err);
});
