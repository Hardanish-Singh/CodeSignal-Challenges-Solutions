// CodeSignal: https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ

const solution = (n) => {
        let area = 1;
        for (let i = n; i > 1; i--) {
                area += (i - 1) * 4;
        }
        return area;
};
