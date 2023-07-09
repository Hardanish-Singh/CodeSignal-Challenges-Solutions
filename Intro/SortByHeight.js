// CodeSignal: https://app.codesignal.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM/

const solution = (a) => {
    let filteredArray = a.filter((a) => a != -1).sort((a, b) => a - b);
    let index = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] != -1) {
            a[i] = filteredArray[index++];
        }
    }
    return a;
};
