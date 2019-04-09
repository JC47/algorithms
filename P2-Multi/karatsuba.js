function sumaArr(arr1, arr2) {
    let res = [];
    let i = arr1.length - 1;
    let j = arr2.length - 1;
    let acarreo = 0;
    while ((i > -1) && (j > -1)) {
        let aux = arr1[i] + arr2[j] + acarreo;
        if (aux > 9) {
            if (i == 0 && j == 0) {
                res.unshift((aux % 10));
                res.unshift(Math.floor(aux / 10));
            }
            else {
                acarreo = Math.floor(aux / 10);
                res.unshift((aux % 10));
            }
        }
        else {
            acarreo = 0;
            res.unshift(aux);
        }
        i--;
        j--;
    }
    if (i > -1) {
        while ((i > -1)) {
            let aux1 = arr1[i] + acarreo;
            if (aux1 > 9) {
                if (i == 0) {
                    res.unshift((aux1 % 10));
                    res.unshift(Math.floor(aux1 / 10));
                }
                else {
                    acarreo = Math.floor(aux1 / 10);
                    res.unshift((aux1 % 10));
                }
            }
            else {
                acarreo = 0;
                res.unshift(aux1);
            }
            i--;
        }
    }
    else if (j > -1) {
        while ((j > -1)) {
            let aux2 = arr2[j] + acarreo;
            if (aux2 > 9) {
                if (j == 0) {
                    res.unshift((aux2 % 10));
                    res.unshift(Math.floor(aux2 / 10));
                }
                else {
                    acarreo = Math.floor(aux2 / 10);
                    res.unshift((aux2 % 10));
                }
            }
            else {
                acarreo = 0;
                res.unshift(aux2);
            }
            j--;
        }
    }

    return res;
}

function resta(a1, a2) {
    let res = [];

    if(a1.length == 1 && a2.length == 1){
        let fast = a1[0] - a2[0];
        if(fast>0){
            res.push(fast)
            return res;
        }
    }

    let i = a1.length - 1;
    let j = a2.length - 1;
    let acarreo = 0;
    if ((a1.length > a2.length) || (a1.length == a2.length)) {
        while ((i > -1) && (j > -1)) {
            let aux = a1[i] - a2[j] - acarreo;
            if (aux < 0) {
                acarreo = 1;
                aux += 10;
                res.unshift(aux);
            }
            else {
                acarreo = 0;
                res.unshift(aux);
            }
            i--;
            j--;
        }
    }
    else {
        while ((i > -1) && (j > -1)) {
            let aux = a2[j] - a1[i] - acarreo;
            if (aux < 0) {
                acarreo = 1;
                aux += 10;
                res.unshift(aux);
            }
            else {
                acarreo = 0;
                res.unshift(aux);
            }
            i--;
            j--;
        }
    }

    if (i > -1) {
        while ((i > -1)) {
            let aux1 = a1[i] - acarreo;
            if (aux1 < 0) {
                acarreo = 1;
                aux1 += 10;
                res.unshift(aux1);
            }
            else {
                acarreo = 0;
                res.unshift(aux1);
            }
            i--;
        }
    }
    else if (j > -1) {
        while ((j > -1)) {
            let aux2 = a2[j] - acarreo;
            if (aux2 < 0) {
                acarreo = 1;
                aux2 += 10;
                res.unshift(aux2);
            }
            else {
                acarreo = 0;
                res.unshift(aux2);
            }
            j--;
        }
    }

    return res;
}

function agregaCeros(arr,n){
    let aux = arr;
    for(let i=0; i<n;i++){
        aux.push(0);
    }
    return aux;
}

function arrToNumber(arr){
    let n = "";
    for(let i of arr){
        n += i.toString();
    }
    return parseInt(n);
}

function numberToArr(n){
    let r = n.toString();
    return r.split("").map(function (item) {
        return parseInt(item);
    });
}

function karatSuba(x, y) {

    let m;

    if ((x.length == 1) || (y.length == 1)) {
        let aux_res = [];
        if((y.length==1) && (x.length==1)){
            let pre_res = x[0] * y[0];
            if (pre_res > 9) {
                aux_res.unshift((pre_res % 10));
                aux_res.unshift(Math.floor(pre_res / 10));
            }
            else {
                aux_res.push(pre_res);
            }
        }
        else if(x.length != 1){
            let aux = arrToNumber(x);
            //console.log("X * y = ", x, y, aux*y[0]);
            aux_res = numberToArr(aux*y[0]);
        }
        else if(y.length != 1){
            let aux = arrToNumber(y);
            //console.log("X * y = ",x,y,x[0]*aux);
            aux_res = numberToArr(x[0]*aux);
        }
        return aux_res;
    }


    let n = (x.length > y.length) ? y.length : x.length;
    m = Math.round(n / 2);


    let high1 = x.slice(0, (x.length -m));
    let low1 = x.slice((x.length - m));

    let high2 = y.slice(0, (y.length -m));
    let low2 = y.slice((y.length - m));

    let z0 = karatSuba(low1, low2);
    let s_z1 = sumaArr(low1,high1);
    let s1_z1 = sumaArr(low2,high2);
    let z1 = karatSuba(s_z1, s1_z1);
    let z2 = karatSuba(high1, high2);

    let aux_resta1 = resta(z1, z2);
    let aux_resta2 = resta(aux_resta1, z0);

    let res_aux1 = agregaCeros(z2,2*m);
    let res_aux2 = agregaCeros(aux_resta2,m);
    let res_aux3 = sumaArr(res_aux1, res_aux2);

    let res = sumaArr(res_aux3, z0);

    return res;

}
const fs = require('fs');

let operandos = require('./data.json');
let n1 = operandos.n1;
let n2 = operandos.n2;

let data = JSON.stringify(karatSuba(n1, n2));
fs.writeFile(`./resultadoK.json`, data, (err) => {
    if (err) throw new Error('No se pudo grabar', err);
});

console.log("Terminó");
