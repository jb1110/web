// object1.js
// 객체지향(java) 함수기반(자바스크립트) + 객체;
// obj = 객체

// this => 1. 객체(객체를 가리킴) 2. 함수(window 객체.) 3. 이벤트(대상)
function sum() {
console.log(this);
}
// 함수호출.
sum();

let obj = {
  name: "홍길동",
  age: 20,
  showName: function() {
    return `이름은 ${this.name}입니다.`
  },  
  setName(name) {  // setName: function(name)
    this.name = name;
  },
  showAge: function() {
    return `나이는${this.age}입니다`
  },
  setAge(age) {
    this.age = age;
  }
}

obj.setName("이정빈")
let result = obj.showName();
let ages = obj.showAge();
console.log(result, ages);

//  class 생성
class Person {
  // name, age: 속성.
  // showName(), set Name() : 메소드 
  constructor(name, age) { // constructor = 생성자
    this.name = name;
    this.age = age;
  }
// 메소드.
  showName() {
    return `이름은 ${this.name}입니다.`;
  }
  setName(name) {
    this.name = name;
  }
  showAge() {
    return `나이는 ${this.age}세입니다.`;
  }
  setAge(age) {
    this.age = age;
  }
}
let num = 10;
let choi = new Person("최민식", 22); // 인스턴스 생성.
choi.setName("최민수")
console.log(choi.showName());
console.log(choi.showAge())
let park = new Person("박충식", 30); // 인스턴스 생성