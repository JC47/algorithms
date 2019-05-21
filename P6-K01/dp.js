const Knapsack = require('./Knapsack');

const items = require('./data.json');

const maxWeight = 1000;

const knapsack = new Knapsack(items, maxWeight);

knapsack.solve();

console.log(knapsack.selectedItems);