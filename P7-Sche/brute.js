let process = require('./data.json');

const findOrder = arr => {
    const l = arr.length;
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l - 1 - i; j++) {
            if (arr[j].time > arr[j + 1].time) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
};

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

console.log(findOrder(process));
console.log('Total: ', getTotalTime(process));