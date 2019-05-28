const MergeSort = require('./merge-sort/MergeSort');
let items = require('./data.json');

selectedItems = [];

items = new MergeSort({
    compareCallback: (itemA, itemB) => {
        let r1 = (itemA.value/itemA.weight).toFixed(2);
        let r2 = (itemB.value/itemB.weight).toFixed(2);
        if (r1 === r2) {
            return 0;
        }
        return r1 > r2 ? -1 : 1;
    },
}).sort(items);

function solve() {
    for (let i = 0; i < items.length; i++) {
        let wMax = wLimit - totalWeight();
        if (items[i].weight < wMax) {
            selectedItems.push(items[i]);
        }
        else if (wMax > 0){
            let ratio = (items[i].value/items[i].weight).toFixed(2);
            let nItem = {
                value: (ratio*wMax),
                weight: wMax
            };
            selectedItems.push(nItem);
        }
    }
}

function totalWeight() {
    return selectedItems.reduce((accumulator, item) => {
        return accumulator + item.weight;
    }, 0);
}

function totalValue() {
    return selectedItems.reduce((accumulator, item) => {
        return accumulator + item.value;
    }, 0);
}

const wLimit = 100;
solve();
console.log(selectedItems);
console.log('Valor total', totalValue());

