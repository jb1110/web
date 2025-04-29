// function5.js
let names = ["홍길동", "김민수", "이정빈", "엄준식"];

let search = prompt("검색할 이름 입력: ");
let i = 0;
let exists = false; // 존재여부 확인.
while (true) {
  if (i == names.length) {
    break;
  }
  if (search == names[i++]) {
    exists = true;
    break;
  }
}
if (exists) {
  alert("있음");
} else {
  alert("없음")
}


// for (let i = 0; i < names.length; i++) {
//   if(search == names[i]) {
//     alert('있음');
//   } else {
//     alert ('없음'); 
//   }
// }