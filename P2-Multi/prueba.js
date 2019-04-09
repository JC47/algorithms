/* let r = [1,1,2];
let r2 = [1,9];

function resta(a1,a2){
    let res = [];
    let i = a1.length - 1;
    let j = a2.length - 1;
    let acarreo = 0;
    if(a1.length > a2.length){
        while ((i > -1) && (j > -1)) {
            let aux = a1[i]-a2[j]-acarreo;
            if(aux<0){
                acarreo = 1;
                aux += 10;
                res.unshift(aux);
            }
            else{
                acarreo = 0;
                res.unshift(aux);
            }
            i--;
            j--;
        }
    }
    else{
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

console.log(resta(r,r2)); */

/* function arrToNumber(arr) {
    let n = "";
    for (let i of arr) {
        console.log(i);
        n += i.toString();
    }
    return parseInt(n);
}

let arr = [2,3,4];

console.log(arrToNumber(arr) + 1); */

function perro (n){
    let r = n.toString();
    return r.split("").map(function (item) {
        return parseInt(item, 10);
    });
}

console.log(perro(123));