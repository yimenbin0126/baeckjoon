function solution(n) {
    // 제일 작은 수 구하기
    for (let x = 1; x < n; x++) {
        if (n % x == 1) {
            return x;
        }
    }
}