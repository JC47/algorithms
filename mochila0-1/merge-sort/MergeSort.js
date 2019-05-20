const Sort = require('./Sort');

module.exports =  class MergeSort extends Sort {
    sort(originalArray) {
        this.callbacks.visitingCallback(null);

        if (originalArray.length <= 1) {
            return originalArray;
        }

        // Divido el arreglo
        const middleIndex = Math.floor(originalArray.length / 2);
        const leftArray = originalArray.slice(0, middleIndex);
        const rightArray = originalArray.slice(middleIndex, originalArray.length);

        // Ordeno las dos mitades
        const leftSortedArray = this.sort(leftArray);
        const rightSortedArray = this.sort(rightArray);

        // Termino
        return this.mergeSortedArrays(leftSortedArray, rightSortedArray);
    }

    mergeSortedArrays(leftArray, rightArray) {
        let sortedArray = [];

        while (leftArray.length && rightArray.length) {
            let minimumElement = null;

            if (this.comparator.lessThanOrEqual(leftArray[0], rightArray[0])) {
                minimumElement = leftArray.shift();
            } else {
                minimumElement = rightArray.shift();
            }

            this.callbacks.visitingCallback(minimumElement);

            sortedArray.push(minimumElement);
        }

        if (leftArray.length) {
            sortedArray = sortedArray.concat(leftArray);
        }

        if (rightArray.length) {
            sortedArray = sortedArray.concat(rightArray);
        }

        return sortedArray;
    }
}