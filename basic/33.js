// 삼각형 한변의 길이 < 두 변의 길이 합
function solution(sides) {
    sides.sort((a, b) => a-b);
    return (sides[2] < sides[0]+sides[1]) ? 1 : 2; 
}