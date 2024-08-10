// CodeSignal: https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC

// Solution 1
var solution = (statues) => {
    statues.sort((a, b) => a - b);
    let minStatuesNeeded = 0;
    for (let i = statues[0]; i < statues[statues.length - 1]; i++) {
        if (!statues.includes(i)) {
            minStatuesNeeded++;
        }
    }
    return minStatuesNeeded;
};

// Solution 2
var solution = (statues) => {
    statues.sort((a, b) => a - b);
    return Array(statues.at(statues.length - 1) - statues.at(0) + 1)
        .fill()
        .map((_, idx) => statues.at(0) + idx)
        .reduce((accumulator, currentValue) => {
            if (!statues.includes(currentValue)) {
                accumulator++;
            }
            return accumulator;
        }, 0);
};
