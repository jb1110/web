// condition.js
let isTrue = true;
let num1 = 5;
let num2 = 10;

isTrue = 3 < 5;
isTrue = num1 < 5;
isTrue = --num1 < 5;
isTrue = --num1 <= 4 && num2++ == 10;
isTrue = 2; // true / false => truthy / falsy (0, "", null, underfied, NaN)
console.log(num1, num2);

if (isTrue) {
  // isTrue 의 참 => if 블럭 실행.
  console.log('참');
} else {
  // isTrue 의 참 => else 블럭 실행.
  console.log('거짓')
}