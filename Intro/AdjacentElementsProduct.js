// CodeSignal: https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m/

// Solution 12
var solution = (inputArray) => {
    let maxProduct = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < inputArray.length; i++) {
        const product = inputArray[i] * inputArray[i + 1];
        if (product > maxProduct) {
            maxProduct = product;
        }
    }
    return maxProduct;
};

// Solution 2
var solution = (inputArray) =>
    inputArray.reduce((accumulator, currentItem, currentIndex, inputArray) => {
        if (currentIndex === inputArray.length - 1) return accumulator;
        const product = currentItem * inputArray[currentIndex + 1];
        accumulator = Math.max(accumulator, product);
        return accumulator;
    }, Number.NEGATIVE_INFINITY);
