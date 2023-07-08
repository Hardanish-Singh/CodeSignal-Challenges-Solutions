// CodeSignal: https://app.codesignal.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ/

const solution = (n) => {
    n = n.toString();
    let firstHalf = n.slice(0, n.length / 2).split("");
    let secondHalf = n.slice(n.length / 2).split("");
    return firstHalf.reduce((a, b) => +a + +b, 0) === secondHalf.reduce((a, b) => +a + +b, 0);
};
