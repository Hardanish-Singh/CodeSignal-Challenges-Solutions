// CodeSignal: https://app.codesignal.com/arcade/intro/level-2/xskq4ZxLyqQMCLshr

// Solutionn 1
var solution = (matrix) => {
    let columns = [];
    let sum = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            if (matrix[row][column] === 0 && !columns.includes(column)) {
                // Store column number & make all column values 0
                columns.push(column);
                matrix.forEach((d, i) => {
                    if (i > row) {
                        d[column] = 0;
                    }
                });
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            if (matrix[row][column] > 0) {
                sum += matrix[row][column];
            }
        }
    }

    return sum;
};

// Solution 2
var solution = (matrix) => {
    let sum = 0;

    for (let row = 0; row < matrix[0].length; row++) {
        for (let column = 0; column < matrix.length; column++) {
            if (matrix[column][row] === 0) {
                break;
            }
            sum += matrix[column][row];
        }
    }

    return sum;
};
