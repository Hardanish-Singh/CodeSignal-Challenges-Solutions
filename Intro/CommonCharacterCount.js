// CodeSignal: https://app.codesignal.com/arcade/intro/level-3/JKKuHJknZNj4YGL32/

const solution = (s1, s2) => {
    let map1 = {};
    let map2 = {};
    for (let i = 0; i < s1.length; i++) {
        s1[i] in map1 ? (map1[s1[i]] += 1) : (map1[s1[i]] = 1);
    }
    for (let i = 0; i < s2.length; i++) {
        s2[i] in map2 ? (map2[s2[i]] += 1) : (map2[s2[i]] = 1);
    }

    let count = 0;
    for (const [key1, value1] of Object.entries(map1)) {
        for (const [key2, value2] of Object.entries(map2)) {
            if (key1 === key2) {
                count += Math.min(value1, value2);
                delete map1[key1];
                delete map2[key2];
            }
        }
    }
    return count;
};
