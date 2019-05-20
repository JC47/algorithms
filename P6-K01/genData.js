const fs = require('fs');
let parameter = parseInt(process.argv[2]);
// N
let n = parameter ? parameter : 4;

// File
let f = "data";

let n1 = [];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < n; i++) {
    n1.push({ value: getRandomInt(1, 100), weight: getRandomInt(1, 10) });
}

let data = JSON.stringify(n1);
fs.writeFile(`./${f}.json`, data, (err) => {
    if (err) throw new Error('No se pudo grabar', err);
});
