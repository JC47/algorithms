const matrices = require('./data.json');

function solve(inicio, fin) {
    if (fin - inicio < 2) {
        return 0;
    } else if (fin - inicio == 2) {
        return matrices[inicio] * matrices[inicio + 1] * matrices[inicio + 2];
    } else {
        let min = Infinity;
        for (let i = inicio + 1; i <= (fin - 1); i++) {
            let c1 = solve(inicio, i);
            let c2 = solve(i, fin);
            let c3 = matrices[inicio] * matrices[i] * matrices[fin];
            if (c1 + c2 + c3 < min) {
                min = c1 + c2 + c3;
            }
        }
        return min;
    }
}

console.log(solve(0, matrices.length - 1));