const MergeSort = require('../P6-K01/merge-sort/MergeSort');
let process = require('./data.json');

process = new MergeSort({
    compareCallback: (pA, pB) => {
        if (pA.time === pB.time) {
            return 0;
        }

        return pA.time < pB.time ? -1 : 1;
    },
}).sort(process);

function getTotalTime(arr) {
    if (arr.length == 0) {
        return 0;
    } else {
        let parcial = Sum(arr);
        arr.pop();
        return parcial + getTotalTime(arr);
    }
}

function Sum(arr) {
    let accumulator = 0;
    for (let i = 0; i < arr.length; i++) {
        accumulator += arr[i].time;
    }
    return accumulator;
}


console.log(process);
console.log('Total: ', getTotalTime(process));