// CodeSignal: https://app.codesignal.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM/

// Solution 1
var solution = (a) => {
    let filteredArray = a.filter((a) => a != -1).sort((a, b) => a - b);
    let index = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] != -1) {
            a[i] = filteredArray[index++];
        }
    }
    return a;
};

// Solution 2
var solution = (a) => {
    let filteredArray = a.filter((a) => a != -1).sort((a, b) => a - b);
    return a.reduce((accumulator, currentValue, currentIndex, a) => {
        if (currentValue != -1) {
            accumulator[currentIndex] = filteredArray.shift();
        }
        return accumulator;
    }, a);
};
