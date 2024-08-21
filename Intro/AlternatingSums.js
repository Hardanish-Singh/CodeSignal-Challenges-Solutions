// CodeSignal: https://app.codesignal.com/arcade/intro/level-4/cC5QuL9fqvZjXJsW9/

// Solution 1
var solution = (array) => {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < array.length; i++) {
        i % 2 === 0 ? (sum1 += array[i]) : (sum2 += array[i]);
    }
    return [sum1, sum2];
};

// Solution 2
var solution = (array) => [
    array.filter((_, i) => i % 2 === 0).reduce((a, b) => a + b, 0),
    array.filter((_, i) => i % 2 !== 0).reduce((a, b) => a + b, 0),
];
