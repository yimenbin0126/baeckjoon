function solution(my_string) {
    let str = 'aeiou';
    let answer = '';
    for (let i = 0; i < my_string.length; i++) {
        if (!str.includes(my_string[i])) {
            answer += my_string[i];
        }
    }
    return answer;
}