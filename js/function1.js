// function1.js
// 2개의 수를 큰값에 10을 더하고 작은값에 5를 더한 후 합을 구하는 기능.
function sum(parameter1, parameter2) {
  let result = 0;
  if (parameter1 > parameter2) {
    result = (parameter1 + 10) + (parameter2 + 5);
  } else {
    result = (parameter2 + 10) + (parameter1 + 5);
  }
  //console.log(`결과값 ${result}`);
  return result; // return : 함수를 호출한 영역으로 결과 반환.
} // end of sum()




let num1 = 4, 
  num2 = 2;
let result = sum(4, 2);
document.write(`결과값 ${result}`)

let num3 = 5, num4 = 3;
result = sum(num3, num4)
console.log(`결과값 ${result}`);

sum(num3, num4);
sum(20, 19)
alert(`결과값 ${result}`);
// document.querySelector(`#result`).value = result;