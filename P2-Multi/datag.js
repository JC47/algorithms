const fs = require('fs');
let parameter = parseInt(process.argv[2]);
// N
let n = parameter ? parameter : 128;

// File
let f = "data";

let n1 = [];
let n2 = [];


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < n; i++) {
    n1.push(getRandomInt(0, 9));
    n2.push(getRandomInt(0, 9));
}

let operandos = {
    n1,
    n2
}

let data = JSON.stringify(operandos);
fs.writeFile(`./${f}.json`, data, (err) => {
    if (err) throw new Error('No se pudo grabar', err);
});
