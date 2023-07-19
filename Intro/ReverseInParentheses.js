// CodeSignal: https://app.codesignal.com/arcade/intro/level-3/9DgaPsE2a7M6M2Hu6/

const solution = (inputString) => {
    let lastIndex = inputString.indexOf(")");
    let firstIndex = inputString.lastIndexOf("(", lastIndex);
    while (firstIndex != -1) {
        inputString =
            inputString.slice(0, firstIndex) +
            inputString
                .slice(firstIndex + 1, lastIndex)
                .split("")
                .reverse()
                .join("") +
            inputString.slice(lastIndex + 1);
        lastIndex = inputString.indexOf(")");
        firstIndex = inputString.lastIndexOf("(", lastIndex);
    }
    return inputString;
};
