// function4.ls
// 함수 + 반복문 + 배열:

let num = 10;
num = "10, 홍길동";
let numAry = [10, 20]; // [0, 1] new Array(); 배열객체?
numAry[2] = 30; // [2]
numAry[3] = 50; // [3]
numAry[4] = "bin"; // [4] 숫자만 기입 문자가능하나 오류발생많음
numAry[4] = 70;
numAry[5] = 90;
numAry[6] = 110;
console.log(numAry[4]); // 인덱스는 0부터 시작.
console.log(`배열의 크기: ${numAry.length}`); // length = 배열의 크기

// 배열 + for반복문.
for (let i = 0; i < numAry.length; i++) {
  console.log(`[i]의 값 : ${i}, 배열의 값 : ${numAry[i]}`);
}

// 연산가능.
console.log(`numAry[6] - numAry[2] => ${numAry[6] - numAry [2]} `);

// 배열의 요소의 합.
let sum = 0;
for (let i = 0; i < numAry.length; i++) {
  sum = sum + numAry[i];
}
console.log(`sum=> ${sum}`);

// 짝수 인덱스 합 , 50보다 큰값의 합
// let sum = 0;
// for (let i = 0; i < numAry.length; i++) {
// //  if (1 % 2 == 0);
//   if(numAry[i] > 50);
//   sum = sum + numAry[i];
// }
// console.log(`sum=> ${sum}`);

//sum = sum + numAry[1];    =    sum += numAry

// 배열변수: ages 27, 28, 25, 30, 31, 36
// let ages = [27, 28, 25, 30, 31, 36]
// let max = 0;
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] > max) { 
//     max = ages[i]; 
//   }
// }
// console.log(`${max} 이 제일 많은 나이입니다.`)


// //함수 : getMax()
function getMax(param3 = []) {
  let max = -Infinity; // 아주 작은 값으로 초기화
  for (let i = 0; i < param3.length; i++) {
    if (max < param3[i]) {
      max = param3[i];
    }
  }
  console.log(`1최대값은 ${max}`); // max 값을 바로 출력
}

getMax([20, 27, 17, 30]);

function getMaxValue(param2 = []) {
  let max = 0;
  for (let i = 0; i < param2.length; i++) {
    if (max < param2[i]) {
      max = param2[i];
    }
  }
  return max;
}

let max = getMaxValue([20, 27, 71, 30]);
console.log(`2최대값은 ${max}`);






// // 함수 getMinValue(매개값으로 배열);

function getMinValue(param1 = []) {
  let min = 500;
  for (let i = 0; i < param1.length; i++) {
    if (min > param1[i]) {
      min = param1[i]
    }
  }
  return min; // 반환
}
let result = getMinValue([20, 27, 17, 30]);
console.log(`3결과는${result}`)