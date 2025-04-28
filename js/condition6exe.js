// condition6exe.js
// 1. 2개의 수를 입력. 큰값을 콘솔에 출력 "두수중에서 큰값은 28입니다."

// 2. 임의의 2개의 수 (Mathramdom 40 ~ 70)를 생성. "2개의 수중에서 큰값은 ??, 작은값은 ??"

// 3. condition3.js에 "A","B","C","D","F" => 95점 이상이면 A+ 85점이상이면 B+ 75점이상이면 C+ 65점이상이면 D+ 잘게 나눠보기

// 4. 반복문(537p) 연습
let num1, num2;

num1 = parseInt(prompt("수를입력: "))
num1 = parseInt(prompt("수를입력: "))
if (num1 > num2) {
  console.log("두수중에서 큰 값은 " + num1 + "입니다.");
} else {
  console.log("두수중에서 큰 값은 " + num1 + "입니다.")
}

// 2
num1 = Math.floor(Math, randow() * 31) + 40; // 40 <= X <= 70
num2 = Math.floor(Math, randow() * 31) + 40;
if (num1 > num2) {
  console.log("2개의 수중에서 큰값은  " + num1 + "입니다." + num2)
  if (num1 == num2) {
    console.log("2개의 수는 같습니다.")
  }
} else {
  console.log("2개의 수중에서 큰값은  " + num2 + "입니다." + num1)
}