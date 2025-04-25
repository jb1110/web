// condition4exe.js
// 1과 10사이에 임의의 값을 생성하고.
// 생성값을 변수에 저장하누 후 2ㅢ 배수 또는 3의 배수 2,3의 배수가 아님

let result = 1 + Math.floor(Math.random() * 10);
console.log(result);

if (result % 2 == 0) {
  console.log("2배수");
} else if (result % 3 == 0) {
  console.log("3배수");
} else {
  console.log("2,3배수 x")
}