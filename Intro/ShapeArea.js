// CodeSignal: https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ

// Solution 1
var solution = (n) => {
    let area = 1;
    for (let i = n; i > 1; i--) {
        area += (i - 1) * 4;
    }
    return area;
};

// Solution 2
var solution = (n) =>
    Array.from({ length: n }, (_, i) => i + 1)
        .reverse()
        .reduceRight((accumulator, currentValue) => (accumulator = accumulator + (currentValue - 1) * 4), 1);
