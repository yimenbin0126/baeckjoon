function solution(n) {
    let answer = 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = (i % 2 == 0) ? i : 0;
        answer += sum; 
    }
    return answer;
}