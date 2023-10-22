function solution(array, n) {
    let newArray = array.filter((i) => i == n);
    return newArray.length;
}