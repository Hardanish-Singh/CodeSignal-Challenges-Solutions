// CodeSignal: https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP

// Solution 1
var solution = (a, b) => {
    const A = [...a].sort((a, b) => a - b);
    const B = [...b].sort((a, b) => a - b);
    if (!(JSON.stringify(A) === JSON.stringify(B))) {
        return false;
    }
    let swapCount = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            swapCount++;
        }
    }
    return swapCount > 2 ? false : true;
};

// Solution 2
var solution = (a, b) => {
    const A = [...a].sort((a, b) => a - b);
    const B = [...b].sort((a, b) => a - b);
    if (!(JSON.stringify(A) === JSON.stringify(B))) {
        return false;
    }
    return a.reduce((accumulator, _, currentIndex, a) => {
        if (a[currentIndex] !== b[currentIndex]) {
            accumulator++;
        }
        return accumulator;
    }, 0) > 2
        ? false
        : true;
};
