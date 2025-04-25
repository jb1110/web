// variable3.js
// 연산자연습 (+, -, /, *, %)
let num1 = document.querySelector('#num1').value;
let num2 = document.querySelector('#num2').value;
num1 = parseInt(num1); // "30" -> 30
num2 = parseInt(num2); // "17" -> 17
num1++; // 31
num1++; // 32
num1++; // 33


//let result = num1 + num2; // "30" + "17" = "3017";   parseInt = 문자를 숫자로 바꾸는것.
let result = num1++ % --num2; // "30" + "17" = "47";
console.log(result, num1, num2);  // result 값을 input#result의 value속성에 대입.
document.querySelector('#result').value = result;
