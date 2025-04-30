//dom1.js

// createElement(), appendChild(), setAttribute(), querySelector()


// document.getElementById('~~~') = document.querySelector('#~~~')
/////////////////////이벤트///////////////////
document.querySelector('#addBtn')
.addEventListener('click', addCallback);

// ul에있는 버튼 전체삭제
document.querySelectorAll('ul button').forEach(function(item){
  // console.log(item);
  item.addEventListener('click', function(){
    item.parentElement.remove();
  })
});

// li의 스타일
document.querySelectorAll('li').forEach(item => {
  console.log(item);
  item.addEventListener('mouseover', function() {
    item.style.backgroundColor = "cyan";
  });

  item.addEventListener('mouseout', function() {
    item.style.backgroundColor = ""; // 원래대로 되돌림
  });
});

// document.querySelectorAll('ul li').forEach(function(item){
//   console.log(item);
//   item.addEventListener('mouseover', function() {
//     item.style.backgroundColor = "cyan";
//   });

//   item.addEventListener('mouseout', function() {
//     item.style.backgroundColor = ""; // 원래대로 되돌림
//   });
// });


// 콜백함수
function addCallback() {
  let fruit = document.getElementById('fruit').value;
  let price = document.getElementById('price').value;

// 입력값이 있는지 체크.
if(!fruit || !price) {
  alert('값입력하세요.')
  return; // 함수의 실행 종료
}

  let newList = createLi(fruit, price);
  document.querySelector('ul').appendChild(newList);

  // 입력값 초기화
  document.getElementById('fruit').value = "";
  document.getElementById('price').value = 0;

  console.log(newList); // 생성된 li 확인용
}

function createLi(fruitName, fruitPrice){
  let li = document.createElement("li");
  let sp1 = document.createElement("span");
  sp1.innerText = fruitName;

  let sp2 = document.createElement("span");
  sp2.innerText = fruitPrice + "원";
  let txt = document.createTextNode(" ");
  
  
  //태그삭제
  let btn = document.createElement("button");
  btn.innerText = "삭제";
  //btn.setAttribute('class', 'btn btn-danger'); // 속성추가.
  btn.className = "btn btn-danger"; // 속성추가
  btn.addEventListener('click', function(){
    btn.parentElement.remove();
  });
  
  li.appendChild(sp1);
  li.appendChild(txt);
  li.appendChild(sp2);
  li.appendChild(btn);

  return li;
}
