const fs = require('fs');
let parameter = parseInt(process.argv[2]);
// N
let n = parameter ? parameter : 100;

// File
let f = "data";

let c1 = [];
let c2 = [];

const letras = ['A','B','C','D','E','F','G','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < n; i++) {
    c1.push(letras[getRandomInt(0, letras.length)]);
    c2.push(letras[getRandomInt(0, letras.length)]);
}

let cadenas = {
    c1,
    c2
}

let data = JSON.stringify(cadenas);
fs.writeFile(`./${f}.json`, data, (err) => {
    if (err) throw new Error('No se pudo grabar', err);
});
