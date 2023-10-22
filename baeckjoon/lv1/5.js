function solution(n) {
    let str = n.toString();
    let answer = [];
    for (let i = str.length - 1; i >= 0; i--) {
        answer.push(parseInt(str[i]));
    }
    return answer;
}