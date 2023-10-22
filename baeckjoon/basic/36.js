function solution(array) {
    array.sort((a, b) => a - b);
    let middle = parseInt(array.length / 2);
    var answer = array[middle];
    return answer;
}