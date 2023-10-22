// 약수 구하기
function solution(n) {
    let answer = 0;
    // 본인 수가 될 때까지 나눠지는 수를 구해 더한다
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            answer += i;
        }
    }
    return answer;
}