// CodeSignal: https://app.codesignal.com/arcade/intro/level-3/9DgaPsE2a7M6M2Hu6/

const solution = (inputString) => {
    let lastIndex = inputString.indexOf(")");
    let firstIndex = inputString.lastIndexOf("(", lastIndex);
    while (firstIndex != -1) {
        let before = inputString.slice(0, firstIndex);
        let reversed = inputString
            .slice(firstIndex + 1, lastIndex)
            .split("")
            .reverse()
            .join("");
        let after = inputString.slice(lastIndex + 1);
        inputString = before + reversed + after;
        lastIndex = inputString.indexOf(")");
        firstIndex = inputString.lastIndexOf("(", lastIndex);
    }
    return inputString;
};
