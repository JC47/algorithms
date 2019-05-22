let items = require('./data.json');

let sol = [];

function solve (itms, max, idx) {
    if (max == 0 || idx == itms.length) {
        return 0;
    }
    if (itms[idx].weight > max)
        return solve(itms, max, idx + 1);
    
    let rMax = itms[idx].value + solve(itms, max - itms[idx].weight, idx + 1);
    let lMax = solve(itms, max, idx + 1);
    buildSol(idx);
    if (rMax > lMax) {
        return rMax;
    }
    else {
        return lMax;
    }
}

function buildSol (n) {
    let i = sol.indexOf(n);
    if (i < 0) {
        sol.push(n);   
    }
    else {
        sol.splice(i,1);
    }
}

/* let x = [{ "value": 5, "weight": 4 },
    { "value": 1, "weight": 1 },
    { "value": 7, "weight": 5 },
    { "value": 4, "weight": 3 }]; */

solve(items,10,0);
for (let i of sol) {
    console.log(items[i]);
}
