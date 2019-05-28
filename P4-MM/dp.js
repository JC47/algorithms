const matrices = require('./data.json');

function solve(inicio, fin) {
    if (fin - inicio < 2) {
        return costos[inicio][fin] = 0;
    } else if (fin - inicio == 2) {
        if (costos[inicio][fin] == -1) {
            costos[inicio][fin] = matrices[inicio] * matrices[inicio + 1] * matrices[inicio + 2];
        }
        return costos[inicio][fin];
    } else {
        let min = Infinity;
        if (costos[inicio][fin] == -1) {
            for (let i = inicio + 1; i <= fin - 1; i++) {
                let c1 = solve(inicio, i);
                let c2 = solve(i, fin);
                let c3 = matrices[inicio] * matrices[i] * matrices[fin];
                if (c1 + c2 + c3 < min) {
                    min = c1 + c2 + c3;
                    costos[inicio][fin] = min;
                }
            }
        } else {
            return costos[inicio][fin];
        }
        return min;
    }
}

let costos = new Array(matrices.length).fill(-1).map(() => new Array(matrices.length).fill(-1));
console.log(solve(0, matrices.length - 1));
// [30, 1, 40, 10, 25]