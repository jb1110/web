// function7.js
console.log(friends);


let friend = {
  name: "김민규",
  age: 20,
  phone: "010-1111-2222",
}
// for .. in => 객체의 속성 반복.
for (let prop in friend) {
  console.log(`prop: ${prop} val: ${friend[prop]}`);
}

// 함수 : makeRow(friend={})
function makeRow(friend = {}) {
  let str = "";
  str += "<tr>";
  for (let prop in friend) {
    str += `<td>${friend[prop]}</td>`;
  }
  str += "</tr>";
  return str;
}

// 출력. 
let titles = ["이름", "나이", "연락처"];
let tlist = "";
tlist += "<table class='table'>";
for (let tlist of titles) {
  tlist += makeRow(friend);
  titles += "<tr><td>" + tlist + "</td><tr>";
}
tlist += "</tbody></table>";
document.write(tlist);


tlist += "<tbody>";
// 데이터 -> row 생성.
//  for (let i = 0; i < friends.length; i++) {
//   tlist += makeRow(friends[i]);
//  }
//for ..of => 배열 반복.
for (let friend of friends) {
  tlist += makeRow(friend);
}
tlist += "</tbody></table>";
document.write(tlist);