// CodeSignal: https://app.codesignal.com/arcade/intro/level-3/9DgaPsE2a7M6M2Hu6/

const solution = (inputString) => {
    let stack = [];
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === "(") {
            stack.push(i);
        } else if (inputString[i] === ")") {
            let index = stack.pop();
            let lastIndex = i;
            while (inputString[lastIndex - 1] === ")") {
                lastIndex--;
            }
            let temp = inputString
                .slice(index + 1, lastIndex)
                .split("")
                .reverse()
                .join("");
            inputString = inputString.slice(0, index) + temp + inputString.slice(lastIndex + 1);
            i = -1;
            stack = [];
        }
    }
    return inputString;
};
