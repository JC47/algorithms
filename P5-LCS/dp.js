
function printTable(c1,c2,table){
    let string = '\n\t0';
    let ic1 = 0;
    for(let x = 0; x<c1.length;x++){
        string += '\t' + c1[x];
    }
    string += '\n'
    for(let i = 0; i < table.length; i++){
        if (i != 0) {
            string += ' ' + c2[ic1] + '  ';
            ic1++;
            for (let j = 0; j < table[i].length; j++) {
                string += '\t' + table[i][j];
            }
        }
        else {
            string += ' ' + 0 + ' ';
            for (let x = 0; x <= c1.length; x++) {
                string += '\t' + 0;
            }
        }
        string += '\n'
    }
    console.log(string);
}

function lcs(cadena1, cadena2) {
    
    // Matriz 
    //const lcsMatriz = Array(cadena2.length + 1).fill(null).map(() => Array(cadena1.length + 1).fill(null));
    const lcsMatriz = Array(cadena2.length + 1).fill(Array(cadena1.length + 1));

    // Ceros en la primera fila
    for (let columnIndex = 0; columnIndex <= cadena1.length; columnIndex++) {
        lcsMatriz[0][columnIndex] = 0;
    }

    // Ceros en la primera columna
    for (let rowIndex = 0; rowIndex <= cadena2.length; rowIndex++) {
        lcsMatriz[rowIndex][0] = 0;
    }

    // Lleno la tabla con las comparaciones correspondientes
    for (let rowIndex = 1; rowIndex <= cadena2.length; rowIndex += 1) {
        for (let columnIndex = 1; columnIndex <= cadena1.length; columnIndex += 1) {
            if (cadena1[columnIndex - 1] === cadena2[rowIndex - 1]) {
                lcsMatriz[rowIndex][columnIndex] = lcsMatriz[rowIndex - 1][columnIndex - 1] + 1;
            } else {
                lcsMatriz[rowIndex][columnIndex] = Math.max(
                    lcsMatriz[rowIndex - 1][columnIndex],
                    lcsMatriz[rowIndex][columnIndex - 1],
                );
            }
        }
    }

    // printTable(cadena1,cadena2,lcsMatriz);

    // Si no hay nada en la esquina de la tabla, no hay subcadena
    if (!lcsMatriz[cadena2.length][cadena1.length]) {
        return [''];
    }

    const result = [];
    let columnIndex = cadena1.length;
    let rowIndex = cadena2.length;

    while (columnIndex > 0 || rowIndex > 0) {
        if (cadena1[columnIndex - 1] === cadena2[rowIndex - 1]) {
            // Diagonal
            result.unshift(cadena1[columnIndex - 1]);
            columnIndex--;
            rowIndex--;
            if (columnIndex < 0 || rowIndex < 0) break; 
        } else if (lcsMatriz[rowIndex][columnIndex] === lcsMatriz[rowIndex][columnIndex - 1]) {
            // MIzquierda
            columnIndex--;
            if (columnIndex < 0) break; 
        } else {
            // Move up.
            rowIndex--;
            if (rowIndex < 0) break; 
        }
    }

    return result;
}


let cadenas = require('./data.json');
let c1 = cadenas.c1;
let c2 = cadenas.c2;

// pruebaArr(c1,c2);
console.log(lcs(c1,c2));