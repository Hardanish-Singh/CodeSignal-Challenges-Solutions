// CodeSignal: https://app.codesignal.com/arcade/intro/level-4/cC5QuL9fqvZjXJsW9/

const solution = (array) => {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < array.length; i++) {
        i % 2 === 0 ? (sum1 += array[i]) : (sum2 += array[i]);
    }
    return [sum1, sum2];
};
