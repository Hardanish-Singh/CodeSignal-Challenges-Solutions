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

// Solution 3
var solution = (statues) =>
    Array(Math.max.apply(null, statues) - Math.min.apply(null, statues) + 1)
        .fill()
        .map((_, idx) => Math.min.apply(null, statues) + idx)
        .reduce((accumulator, currentValue) => {
            if (!statues.includes(currentValue)) {
                accumulator++;
            }
            return accumulator;
        }, 0);

// Solution 4
// prettier-ignore
var solution = (statues) =>
    Array.from({ length: Math.max(...statues) - Math.min(...statues) + 1 }, (_, i) => Math.min(...statues) + i)
        .reduce( (accumulator, currentValue) => {
            if (!statues.includes(currentValue)) {
                accumulator++;
            }
            return accumulator;
        },
        0
    );
