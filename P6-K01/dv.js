const MergeSort = require('./merge-sort/MergeSort');
let items = require('./data.json');

const maxWeight = 1000;
let acumalated = maxWeight;

function solve (itms) {
    let result = [];

    for (let i = 0; i < itms.length; i++) {
        if (itms[i].weight <= acumalated) {
            result.push(itms[i]);
            acumalated -= itms[i].weight;
            if (acumalated <= 0) {
                result.concat(solve(itms.slice(i + 1)));
            }
        }
        /* else if (itms[i].weight <= maxWeight) {
            if (validate(result,itms[i])){

            }
        } */
    }

    return result;
}


function validate (arrR, arrI) {

}

items = new MergeSort({
    compareCallback: (itemA, itemB) => {
        if (itemA.weight === itemB.weight) {
            return 0;
        }

        return itemA.weight < itemB.weight ? -1 : 1;
    },
}).sort(items);

items = new MergeSort({
    compareCallback: (itemA, itemB) => {
        if (itemA.value === itemB.value) {
            return 0;
        }

        return itemA.value > itemB.value ? -1 : 1;
    },
}).sort(items);

console.log(solve(items));
