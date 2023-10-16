function solution(my_string) {
    let reverseStr = '';
    for (let i = my_string.length - 1; i >= 0; i--) {
        reverseStr += my_string[i];
    }
    return reverseStr;
}