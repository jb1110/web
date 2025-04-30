// object2.js  p.594
// 배열 내장객체: new Array() 또는 []
//관련 메소드: push, pop, unshift, shift => forEach.

let arr1 = [10, 20, 30]; // new Array(); =  [];//
arr1[3] = 40;
arr1.push(50); // 추가 메소드.
arr1.unshift(60); // 제일 첫번째 인덱스 추가
// 60, 10, 20, 30, 40, 50
arr1.pop(); // 제일뒤 인덱스사라짐   60, 10, 20, 30, 40, 
arr1.pop(); // 제일뒤 인덱스사라짐   60, 10, 20, 30,
arr1.shift(); // 제일앞 인덱스사라짐   10, 20, 30
arr1.splice(1, 0, 15); // (몇번째 인덱스, 1= 그숫자 0= 그전으로, 입력값,입력값)
// 10, 15, 20, 30,

// every(모두가 만족해야), some(하나라도 있으면)
let result = arr1.some(item=>item % 2 == 1);
console.log(result);

arr1.forEach(function (item, idx, ary) { // 익명함수
  console.log(item, idx, ary)
});

// console.log(arr1)