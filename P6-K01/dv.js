const MergeSort = require('./merge-sort/MergeSort');
let items = require('./data.json');

let sol = [];

items = new MergeSort({
    compareCallback: (itemA, itemB) => {
        if (itemA.weight === itemB.weight) {
            return 0;
        }

        return itemA.weight < itemB.weight ? -1 : 1;
    },
}).sort(items);


function solve (max) {
    let acumulator = max;
    let mv = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i].weight < acumulator) {
            sol.push(items[i]);
            acumulator -= items[i].weight;
            mv += items[i].value;
        }
    }
    return mv;
}

/* let x = [{ "value": 5, "weight": 4 },
    { "value": 1, "weight": 1 },
    { "value": 7, "weight": 5 },
    { "value": 4, "weight": 3 }]; */

console.log(solve(100));
for (let i of sol) {
    console.log(i);
}
