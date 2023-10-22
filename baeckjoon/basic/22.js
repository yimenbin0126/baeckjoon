function solution(s1, s2) {
    let count = 0;
    if (s1.length > s2.length) {
        comparison(s1, s2);
    } else {
        comparison(s2, s1);
    }
    
    function comparison(a, b) {
        for (s of a) {
            if (b.includes(s)) {
                count++;
            }
        }   
    }
    return count;
}