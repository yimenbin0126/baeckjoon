function solution(n) {
    let str = n.toString();
    let count = 0;
    for (s of str) {
        count += parseInt(s);
    }
    return count;
}