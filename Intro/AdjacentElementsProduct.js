// CodeSignal: https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m/solutions

const solution = (inputArray) => {
        let maxProduct = Number.NEGATIVE_INFINITY;
        for (let i = 0; i < inputArray.length; i++) {
                const product = inputArray[i] * inputArray[i + 1];
                if (product > maxProduct) {
                        maxProduct = product;
                }
        }
        return maxProduct;
};
