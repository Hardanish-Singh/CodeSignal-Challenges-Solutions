// CodeSignal: https://app.codesignal.com/arcade/intro/level-1/egbueTZRRL5Mm4TXN

/*
    Here's how the function works:
        1. It divides the year by 100 using the Math.floor() function to get the century number.
        2. It checks if the remainder of the division (year % 100) is greater than 0. If it is, it means that the year falls within the last century, so it adds 1 to the century number.
        3. Finally, it returns the calculated century number.
*/

const solution = (year) => Math.floor(year / 100) + (year % 100 > 0 ? 1 : 0);
