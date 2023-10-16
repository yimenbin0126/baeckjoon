function solution(slice, n) {
    let answer = 0;
    if (n <= slice) {
        answer = 1;
    } else {
        answer = (parseInt(n % slice) == 0) ? parseInt(n / slice) : parseInt(n / slice) + 1;
    }
    return answer;
}