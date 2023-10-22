function solution(numbers, num1, num2) {
    let newNumbers = numbers.splice(num1, num2-num1+1);
    return newNumbers;
}