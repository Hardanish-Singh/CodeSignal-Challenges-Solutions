// CodeSignal: https://app.codesignal.com/arcade/intro/level-4/ZCD7NQnED724bJtjN/

const solution = (picture) => {
    let borderLength = picture[0].length + 2;
    for (let i = 0; i < picture.length; i++) picture[i] = "*" + picture[i] + "*";
    picture.unshift("*".repeat(borderLength));
    picture.push("*".repeat(borderLength));
    return picture;
};
