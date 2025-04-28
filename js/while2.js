// while2.js
// 사용자에게 1 ~ 10까지 임의의 수를 입력하도록 요청.
// 범위밖의 값을 입력시 종료. 입력값의 누적합을 콘솔출력.

let sum = 0;
while(true){
  let num = parseInt(prompt("1 ~ 10까지 임의의 수를 입력 "))
  // 종료조건.
  if (num < 1 || num > 10) {
    break;
  }
  sum += num;
} // end of while.
console.log(`누적값은 ${sum} 입니다.`);


// let sum = 0;
// let num = parseInt(prompt("1 ~ 10까지 임의의 수를 입력 "));

// while (num >= 1 && num <= 10) {
//   sum += num;
//   num = parseInt(prompt("1 ~ 10까지 임의의 수를 입력 "));
// }

// console.log(`누적값은 ${sum} 입니다.`);