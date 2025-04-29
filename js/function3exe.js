// function3exe.js


// 1. max(10, 17) => "2개의 숫자중에서 큰값은 17입니다."
function max(num1, num2) {
  if (num1 > num2) {
    big = num1;
  } else {
    big = num2;
  }
  return num1 + "과 " + num2 + " 중에서 큰 값은 " + big + "입니다.";
}
console.log(max(22, 17));


// 2. sumUpTo(7) => "1부터 7까지의 합은 22입니다."
function sumUpTo(n) {
  let sum = 0;
  for (let i = 1; i <= 255; i++) {
    sum += i;
  }
  return `1부터 ${n}까지의 합은 ${sum}입니다.`;
}
console.log(sumUpTo(255));


// 3. diff(34, 17) => "두수의 차는 17입니다"
function diff(a, b) {
  let result;

  if (a > b) {
    result = a - b;
  } else {
    result = b - a;
  }

  return `두수의 차는 ${result}입니다`;
}
console.log(diff(34, 17));