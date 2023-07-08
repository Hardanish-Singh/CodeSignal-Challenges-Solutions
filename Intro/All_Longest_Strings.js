// CodeSignal: https://app.codesignal.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL/

const solution = (inputArray) => {
    let sortedArrayByLength = inputArray.sort((a, b) => b.length - a.length);
    let index = sortedArrayByLength.findIndex((arr) => arr.length !== sortedArrayByLength[0].length);
    return sortedArrayByLength.slice(0, index === -1 ? 1 : index);
};
