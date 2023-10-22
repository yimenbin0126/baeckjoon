function solution(arr) {
    let sum = 0;
    for (a of arr) {
        sum += a;
    }
    let answer = sum / arr.length;
    return answer;
}