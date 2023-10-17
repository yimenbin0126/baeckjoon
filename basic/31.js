function solution(money) {
    let num = parseInt(money / 5500);
    let resultMoney = money % 5500;
    let answer = [num, resultMoney];
    return answer;
}