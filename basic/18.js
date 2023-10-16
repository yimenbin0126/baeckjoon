function solution(strlist) {
    let strArray = [];
    for (str of strlist) {
        strArray.push(str.length);
    }
    return strArray;
}