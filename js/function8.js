// // function8.js
// console.log(json); // 문자열.
// let data = JSON.parse(json); // json문자열 -> 객체 변환.
// console.log(data); // 객체

// console.clear(); // 로그 지우기
// // for (let emp of data) {
// //   console.log(emp);
// // }

// // 사원목록을(table형식) 출력.
// let elist = "<table class='table'>";
// elist += "<tbody>";
// for (let emp of data) {
//   //console.log(emp);
//   elist += makeTr(emp);
// }
// elist += "</tbody></table>";
// document.write(elist)


// // tr을 생성하는 함수.
// function makeTr(emp = {}) {
//   let str = "<tr>";
//   // 속성을 정의.
//   let fields = ['id', 'first_name', 'email','salary', 'gender'];
//   for (let field of fields) {
//    // console.log(emp[field]); // emp['id'] == emp.id
//    str += `<td>${emp[field]}</td>`
//   }
//   str += "</tr>";
//   return str;
// }

// console.log(makeTr({
//   id: 12,
//   first_name: "kildong",
//   email: "kildong@email.com"
// }));


let data = JSON.parse(json); // JSON 문자열을 객체로 변환

// button<삭제> 템플릿
let btnTemplate = "<button class='btn btn-danger' onclick='deleteTr(event)'>삭제</button>";
function deleteTr(event) {
  console.log(event)
  event.target.parentElement.parentElement.remove();
  // button = event.target;
  // tr = button.closest("tr");
  // if (tr) tr.remove();
}

// 테이블을 만들기 위해 HTML 문자열 생성

let elist = "<table class='table' >"; // 테이블 시작
elist += "<thead><tr>"; // 테이블 헤더 추가
elist += "<th>이름</th><th>이메일</th><th>성별</th><th>연봉</th><th>삭제</th>"; // 헤더 내용
elist += "</tr></thead>";

elist += "<tbody>"; // 테이블 바디 시작
for (let emp of data) {
  elist += makeTr(emp); // 사원 정보를 tr로 추가
}
elist += "</tbody></table>"; // 테이블 바디 종료

// document.write()를 사용하여 HTML 출력
document.write(elist);

// tr을 생성하는 함수
function makeTr(emp = {}) {
  let str = "<tr>";
  let fields = ['first_name', 'email', 'gender', 'salary']; // 출력할 필드만 선택
  for (let field of fields) {
    str += `<td>${emp[field]}</td>`; // 각 필드를 <td>로 감쌈
  }
  str += `<td>${btnTemplate}</td>`
  str += "</tr>";
  return str;
}

// 버튼클릭
document.querySelector('button#searchBtn')
.addEventListener('click', function () {
  // 입력값
  console.log(this);
    let searchValue = document.querySelector('#userValue').value;
    let list = "";
    for (let emp of data) {
      if (searchValue == 'ALL' || searchValue == emp.gender) {
        list += makeTr(emp);
      }
    }
    document.querySelector('table.table>tbody').innerHTML = list;
  });
  
  //2.select "change";
document.querySelector('select#selectGender')
  .addEventListener('change', function () {
    let searchValue = document.querySelector('#selectGender').value;
    let list = "";
    for (let emp of data) {
      if (searchValue == 'All' || searchValue == emp.gender) {
        list += makeTr(emp);
      }
    }
    document.querySelector('table.table>tbody').innerHTML = list;
  });