function solution(numbers) {
    let maxArray = numbers.sort((n1, n2) => n2 - n1);
    var answer = maxArray[0] * maxArray[1];
    return answer;
}