function solution(numbers) {
    let sum = 0;
    for (num of numbers) {
        sum += num;
    }
    var answer = sum / numbers.length;
    return answer;
}