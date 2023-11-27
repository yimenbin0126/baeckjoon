// 한 줄로 입력받기
let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

function solution(array) {

}

// 여러줄일때 (한꺼번에 배열에 대입됨)
const filePath = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
