const Knapsack = require('./Knapsack');

const items = require('./data.json');

const maxWeight = 10000;

const knapsack = new Knapsack(items, maxWeight);

knapsack.solve();

console.log(knapsack.totalValue);
console.log(knapsack.totalWeight);
console.log(knapsack.selectedItems.length);
console.log(knapsack.selectedItems);