const Knapsack = require('./Knapsack');
const KnapsackItem = require('./KnapsackItem');

const possibleKnapsackItems = [
    new KnapsackItem({ value: 5, weight: 4 }),
    new KnapsackItem({ value: 1, weight: 1 }),
    new KnapsackItem({ value: 7, weight: 5 }),
    new KnapsackItem({ value: 4, weight: 3 }),
];

const maxKnapsackWeight = 7;

const knapsack = new Knapsack(possibleKnapsackItems, maxKnapsackWeight);

knapsack.solve();

console.log(knapsack.totalValue);
console.log(knapsack.totalWeight);
console.log(knapsack.selectedItems.length);
console.log(knapsack.selectedItems[0].toString());
console.log(knapsack.selectedItems[1].toString());