// CodeSignal: https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG

const isStrictlyIncreasing = (sequence) => {
    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            return false;
        }
    }
    return true;
};

// Solution 1
var solution = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] >= nums[i]) {
            // let copy1 = nums.slice(0, i-1).concat(nums.slice(i));
            // let copy2 = nums.slice(0, i).concat(nums.slice(i+1));
            let copy1 = [...nums.slice(0, i - 1), ...nums.slice(i)];
            let copy2 = [...nums.slice(0, i), ...nums.slice(i + 1)];
            return isStrictlyIncreasing(copy1) || isStrictlyIncreasing(copy2);
        }
    }
    return true;
};

// Solution 2
var solution = (nums) => {
    if (isStrictlyIncreasing(nums)) return true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] >= nums[i]) {
            let copy1 = [...nums.slice(0, i - 1), ...nums.slice(i)];
            let copy2 = [...nums.slice(0, i), ...nums.slice(i + 1)];
            if (!isStrictlyIncreasing(copy1) && !isStrictlyIncreasing(copy2)) {
                continue;
            } else {
                return true;
            }
        }
    }
    return false;
};
