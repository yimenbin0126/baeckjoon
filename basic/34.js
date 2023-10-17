function solution(price) {
    let sale = 0;
    if (price >= 100000 && price < 300000) {
        sale = 5;
    } else if (price >= 300000 && price < 500000) {
        sale = 10;
    } else if (price >= 500000) {
        sale = 20;
    }
    var answer = parseInt(price - (price * sale * 0.01));
    return answer;
}