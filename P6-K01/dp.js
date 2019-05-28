const Knapsack = require('./Knapsack');

const items = require('./data.json');

const maxWeight = 100;

const knapsack = new Knapsack(items, maxWeight);

knapsack.solve();

console.log(knapsack.selectedItems);