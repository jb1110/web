// object4.js
// filter() => 조건을 만족하는 요소를 새로운 배열을 생성.

let numAry = [20, 27, 33, 42, 19, 63, 52];

let filterAry = numAry.filter(function (item, idx, ary) {
  if (item % 2 == 0) {
    return true; 
  }
  return false;
});

console.log(filterAry);


///////// salary가 5000이 넘는 사원들을 empAry에 저장.
let num = JSON.parse(json);
let empAry = num.filter(emp => emp.salary > 5000);
console.log(empAry);