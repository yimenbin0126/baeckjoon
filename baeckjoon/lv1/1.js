// 자릿수 더하기
function solution(n)
{
    let str = n.toString();
    let answer = 0;
    for (s of str) {
        answer += parseInt(s);
    }
    return answer;
}