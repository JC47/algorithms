const fs = require('fs');
let operandos = require('./data.json');

let n1 = operandos.n1;
let n2 = operandos.n2;

let resultado = [];
let ceros = 0;

for(let i = (n2.length-1); i > -1; i--){
    let acumulador = [];
    let acarreo = 0;
    for (let j = (n1.length-1); j > -1; j--){
        let resultado1 = (n1[j]*n2[i]) + acarreo;
        if(resultado1 > 9){
            if(j==0){
                acumulador.unshift((resultado1 % 10));
                acumulador.unshift(Math.floor(resultado1 / 10));
            }
            else{
                acarreo = Math.floor(resultado1 / 10);
                acumulador.unshift((resultado1 % 10));
            }
        }
        else{
            acumulador.unshift(resultado1);
            acarreo=0;
        }
    }
    for(let x = 0; x < ceros; x++){
        acumulador.push(0);
    }
    ceros++;
    sumaArr(acumulador);
}

let data = JSON.stringify(resultado);
fs.writeFile(`./resultado.json`, data, (err) => {
    if (err) throw new Error('No se pudo grabar', err);
});

console.log("Terminó");

function sumaArr(arr){
    let res = [];
    if(resultado.length == 0){
        resultado = arr;
    }
    else{
        let i = resultado.length - 1;
        let j = arr.length - 1;
        let acarreo = 0;
        while((i>-1)&&(j>-1)){
            let aux = resultado[i]+arr[j]+acarreo;
            if(aux>9){
                if(i==0 && j==0){
                    res.unshift((aux % 10));
                    res.unshift(Math.floor(aux / 10));
                }
                else{
                    acarreo = Math.floor(aux / 10);
                    res.unshift((aux % 10));
                }
            }
            else{
                acarreo=0;
                res.unshift(aux);
            }
            i--;
            j--;
        }
        if(i>-1){
            while ((i > -1)){
                let aux1 = resultado[i]+ acarreo;
                if (aux1 > 9) {
                    if(i==0){
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
        else if(j>-1){
            while ((j > -1)) {
                let aux2 = arr[j] + acarreo;
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

        resultado = res;
    }
}