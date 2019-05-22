const MergeSort = require('./merge-sort/MergeSort');

module.exports = class Knapsack {

    constructor(possibleItems, weightLimit) {
        this.selectedItems = [];
        this.weightLimit = weightLimit;
        this.possibleItems = possibleItems;
    }

    sortWeight() {
        this.possibleItems = new MergeSort({
            compareCallback: (itemA, itemB) => {
                if (itemA.weight === itemB.weight) {
                    return 0;
                }

                return itemA.weight < itemB.weight ? -1 : 1;
            },
        }).sort(this.possibleItems);
    }

    sortValue() {
        this.possibleItems = new MergeSort({
            compareCallback: (itemA, itemB) => {
                if (itemA.value === itemB.value) {
                    return 0;
                }

                return itemA.value > itemB.value ? -1 : 1;
            },
        }).sort(this.possibleItems);
    }

    solve() {
        // Antes que nada hay que ordenar por valor y peso
        // this.sortValue();
        this.sortWeight();

        this.selectedItems = [];

        // Matriz
        const numberOfRows = this.possibleItems.length;
        const numberOfColumns = this.weightLimit;
        const kMatriz = Array(numberOfRows).fill(null).map(() => {
            return Array(numberOfColumns + 1).fill(null);
        });
        // const kMatriz = Array(numberOfRows).fill(Array(numberOfColumns + 1));

        // Se llena la primer columna con ceros (Peso máximo 0)
        for (let itemIndex = 0; itemIndex < this.possibleItems.length; itemIndex++) {
            kMatriz[itemIndex][0] = 0;
        }

        // Ganacia de cada item (Steps por mochila crecientes)
        for (let weightIndex = 1; weightIndex <= this.weightLimit; weightIndex++) {
            const itemIndex = 0;
            const itemWeight = this.possibleItems[itemIndex].weight;
            const itemValue = this.possibleItems[itemIndex].value;
            kMatriz[itemIndex][weightIndex] = itemWeight <= weightIndex ? itemValue : 0;
        }

        // Lleno la tabla
        for (let itemIndex = 1; itemIndex < this.possibleItems.length; itemIndex++) {
            for (let weightIndex = 1; weightIndex <= this.weightLimit; weightIndex++) {
                const currentItemWeight = this.possibleItems[itemIndex].weight;
                const currentItemValue = this.possibleItems[itemIndex].value;

                if (currentItemWeight > weightIndex) {
                    // Validación de peso
                    kMatriz[itemIndex][weightIndex] = kMatriz[itemIndex - 1][weightIndex];
                } else {
                    // Se agrega
                    kMatriz[itemIndex][weightIndex] = Math.max(
                        currentItemValue + kMatriz[itemIndex - 1][weightIndex - currentItemWeight],
                        kMatriz[itemIndex - 1][weightIndex],
                    );
                }
            }
        }

        // Recorro matriz con resultados
        let itemIndex = this.possibleItems.length - 1;
        let weightIndex = this.weightLimit;

        while (itemIndex > 0) {
            const currentItem = this.possibleItems[itemIndex];
            const prevItem = this.possibleItems[itemIndex - 1];

            if (kMatriz[itemIndex][weightIndex] && kMatriz[itemIndex][weightIndex] === kMatriz[itemIndex - 1][weightIndex]) {
                const prevSumValue = kMatriz[itemIndex - 1][weightIndex];
                const prevPrevSumValue = (itemIndex - 2) < 0 ? kMatriz[itemIndex - 1][weightIndex] : kMatriz[itemIndex - 2][weightIndex];
                // const prevPrevSumValue = kMatriz[itemIndex - 2][weightIndex];
                if (!prevSumValue || (prevSumValue && prevPrevSumValue !== prevSumValue)) {
                    if (this.totalWeight <= this.weightLimit) {
                        this.selectedItems.push(prevItem);
                    }
                }
            } else if (kMatriz[itemIndex - 1][weightIndex - currentItem.weight]) {
                if (this.totalWeight <= this.weightLimit) {
                    this.selectedItems.push(prevItem);
                }
                weightIndex -= currentItem.weight;
            }

            itemIndex -= 1;
        }
    }

    get totalValue() {
        return this.selectedItems.reduce((accumulator, item) => {
            return accumulator + item.value;
        }, 0);
    }

    get totalWeight() {
        return this.selectedItems.reduce((accumulator, item) => {
            return accumulator + item.weight;
        }, 0);
    }

}