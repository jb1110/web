// for4.js
document.write("<h3>구구단출력</h3>");
// <p> 3 * 1 = 3 </p>
// <p> 3 * 2 = 6 </p>
// .... <p> 3 * 9 = 27 </p>
let str = "";
str += "<table class='table table-striped'>";
str += "<tbody>";
// let m = p;
for (let n = 1; n <= 9; n++) {
  str += "<tr>"
  for (let p = 2; p <= 9; p++) {
    str += `<td> ${p}   *   ${n}   =   ${p*n} </td>`;
  } // end of for2 
  str += "</tr>";
} // end of for1
str += "</tbody>";
str += "/<table>";
document.write(str);