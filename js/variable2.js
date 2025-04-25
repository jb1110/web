// bariable2.js
let num1 = 100; // int num;        (변수첫번째는 무조건 영문자)
console.log(typeof num1); //변수의 타입알고싶으면 typeof쓰기
num1 = "hundred";

let num_2 = 200;
let nameOfFriend = "홍길동";

let birthOfDate = new Date(); // 대문자 O vs 소문자 o 값이틀림   
console.log(typeof birthOfDate);

let isOK = true; // 또는 false
isOK = 10 < 5; // false.
isOK = 10 > 5; // true

if (isOK) {
  // isOK 라는 값이 true일 경우 {} < 블럭을 실행
  console.log('isOK는 참입니다.');
}

// 배열: 여러게의 값을 (저장)담을수있음 [100, 200, 250] 
let numAry = [10, 20, 25, 31]; // 인덱스는 0부터 시작. ex) 0-1-2-3-4~~~
console.log(numAry[0]);

let strAry = ["Hello", "Nice", "Good", 300] // 가능하지만 안쓰도록 합니다.2025.04.25 숫자는 숫자배열 문자는 문자배열

// 객체(obhect). 키: 값을 형태.
let person = {
  name: "홍길동",
  age: 20,
  height: 168.9,
  weight: 65.3,
  personInfo: function () { //함수는 기능.
    console.log('이름은' + person.name + person.name + '이고 나이는' + person.age);
  }
}
person.personInfo(); //괄호 = 함수를 실행한다라는 의미
console.log(person.name);

// undefied, null
let whatIsThis;
whatIsThis = document.querySelector('#userValue');
console.log(typeof whatIsThis); //null 의 데이터유형은 object  (typeof 빼면 null나옴)