function solution(n) {
    let numArray = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            numArray.push(i);
        }
    }
    return numArray;
}