// for2.js
// 1 ~ 10까지 반복
// 2의 배수, 3의 배수  => 2의 배수는 sum2 저장
//                       3의 배수는 sum3 저장
let sum2 = 0, sum3 = 0
sum = 0;
for (let i = 1; i <= 10; i++) { 
  if (i % 2 == 0)  { // 2의 배수  
    sum2 += i; 
  } // else 빼면 6도포함가능
  else if (i % 3 ==0) // 3의 배수
    sum3 += i; 
} 
console.log("2의배수의 합은 " + sum2) 
console.log("3의 배수의 합은 단 6은 2의 배수 " + sum3)