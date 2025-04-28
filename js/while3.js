// while3.js
// 친구이름을 입력. => quit 종료.

// 화면요소를 삭제하는 함수.
function removeElement(parameter1) {
  console.dir(parameter1.target.parentElement.parentElement);
  parameter1.target.parentElement.parentElement.remove(); // 제거
}


// let str = '<table class="table"><tbody>';
// let running = true;
// while (running) {
//   let userValue = prompt("친구이름을 입력하세요.");
//   if (userValue == "quit") {
//     running = false;
//   } else {
//     str += `<tr><td>${userValue}</td>
//     <td><button class='btn btn-danger'>삭제</button></td>
//     </tr>`;
//   }
// }
// str += `</tbody></table>`;
// document.write(str);



let str = '<table class="table"><tbody>';
let running = true;
while (running) {
  let userValue = prompt("친구이름을 입력하세요.");
  if (userValue == "quit") {
    running = false;
    continue;
  }
  str += `<tr><td>${userValue}</td><td><button onclick="removeElement(event)" class='btn btn-danger'>삭제</button></td></tr>`;
}
str += `</tbody></table>`;
document.write(str);