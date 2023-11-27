const filePath = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let NK = input[0].split(' ');
let num = Number(NK[0]);
let sum = Number(NK[1]);
let count = 0;
for (let i = num; i >= 1; i--) {
    count += parseInt(sum / Number(input[i]));
    sum %= Number(input[i]);
}
console.log(count);
