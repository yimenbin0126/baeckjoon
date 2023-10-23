function solution(s){
    let pNum = 0;
    let yNum = 0;
    for (str of s) {
        if (str === 'p' || str === 'P') {
            pNum++;
        } else if (str === 'y' || str === 'Y') {
            yNum++;
        }
    }
    if (pNum == yNum) {
        return true;
    } else {
        return false;
    }
}