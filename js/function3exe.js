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
console.log(max(50, 17));
// 2. sumUpTo(7) => "1부터 7까지의 합은 22입니다."

// 3. diff(34, 17) => "두수의 차는 17입니다"