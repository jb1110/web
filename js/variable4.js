// variable4.js
// 연산자(할당연산자 524p)

let num1 = "10";
num1 = num1 + "20"; // "1020"
num1 = num1 + "30"; // "102030"
console.log(num1);

num1 += "40"; // num1 = num1 + "40";

let num2 = 10; // number
num2 += 20;
num2 += 30;
num2 += 40;
// console.log(num2);

num2 = num2 - 5; // 55
num2 -= 5; // 50
// console.log(num2);

num2 = num2 * 2; // 100
num2 *= 2; // 200
num2 = 10203040;

// 비교연산자
console.log(num2 == num1);  
console.log(num2 === num2);

console.log(num2 != num1); // 값만 비교
console.log(num2 !== num1) // 값, 타입

// 논리연산자. 
console.log(num1 >= num2 || num1 < 100
  
)
