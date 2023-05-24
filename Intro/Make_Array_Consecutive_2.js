// CodeSignal: https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC

const solution = (statues) => {
        statues.sort((a, b) => a - b);
        let minStatuesNeeded = 0;
        for (let i = statues[0]; i < statues[statues.length - 1]; i++) {
                if (!statues.includes(i)) {
                        minStatuesNeeded++;
                }
        }
        return minStatuesNeeded;
};
