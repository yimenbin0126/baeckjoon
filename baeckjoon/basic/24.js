function solution(num_list) {
    let two = [];
    let one = [];
    for (num of num_list) {
        if (num % 2 == 0) {
            two.push(num);
        } else {
            one.push(num);
        }
    }
    var answer = [two.length, one.length];
    return answer;
}