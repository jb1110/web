// object3.js
// indexOf()

let numArr = [10, 21, 33, 54, 16, 73]
let result = numArr.indexOf(33); // =1은 찾는요소가 없음.
console.log(result);

let strAry =["홍길동", "김길동", "홍길순"];
strAry.forEach(function(item) {
  if (item.indexOf("홍") == 0) {
    console.log(item);
  }
});

// numAry(변수) => 10 ~ 50 사이의 값을 10개 저장. => 콘솔에 출력(forEach);

let numAry = [];
for(let i = 1; i <= 10; i++) {
  let no = Math.floor(Math.random() * 41) +10;
  numAry.push(no); 
}
// 10 ~ 50 사이의 값이 정상적으로 생성 체크 : every()

// result = numAry.every (item => item >= 10 && item <= 50);
// console.log(result)

result = numAry.every(function (item) {
  if (item >= 10 && item <= 50) {
    return true;
  } else {
    return false;
  }
})


numAry.forEach(function (item) {
  console.log(item);
})