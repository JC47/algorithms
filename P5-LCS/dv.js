
function lcs (cadena1, cadena2) {
    let res = '';
    let i = 0;
    while (i < cadena1.length && cadena2.length > 0) {
        let j = cadena2.indexOf(cadena1[i]);
        if (j != -1) {
            res += cadena1[i];
            res += lcs(cadena1.slice(i + 1), cadena2.slice(j + 1));
            break;
        }
        i++;
    }

    return res;
}

function maxlcs(cadena1, cadena2) {
    let res = []
    for (let i = 0; i < cadena1.length; i++) {
        res.push(lcs(cadena1.slice(i), cadena2));
    }
    let maxres = '';
    let ammount = 0;
    for (let i = 0; i < res.length; i++) {
        if (ammount < res[i].length) {
            ammount = res[i].length;
            maxres = res[i].split('');
        }
    }
    return maxres;
}

let cadenas = require('./data.json');
let c1 = cadenas.c1;
let c2 = cadenas.c2;

console.log(maxlcs(c1,c2));