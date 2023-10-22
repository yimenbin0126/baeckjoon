function solution(n, k) {
    kNum = k - parseInt(n / 10);
    var answer = n * 12000 + kNum * 2000;
    return answer;
}