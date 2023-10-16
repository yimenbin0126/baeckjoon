function solution(array, height) {
    let count = 0;
    for (arr of array) {
        if (arr > height) {
            count++;   
        }
    }
    return count;
}