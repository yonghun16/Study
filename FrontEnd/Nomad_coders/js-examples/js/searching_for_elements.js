const title = document.getElementsByClassName("grab_class");
// 클래스는 복수 일 수 있으니 배열로 입력받음

const title2 = document.getElementsByTagName("h2");
// 테그이름도 복수 일 수 있으니 배열로 입력받음

const title3 = document.querySelector(".grab_class");
// 쿼리 셀렉터는 가장 먼저 있는 것을 받음 

const title4 = document.querySelectorAll(".grab_class");
// 쿼리 셀렉터All는 배열로 입력받음

const title6 = document.querySelector(".grab_class h3");
// null 발생 7줄에서 이미 .grab_class를 받아왔으므로

console.log(title[0]);
console.log(title[1]);
title[0].innerText = "Got you 1";

console.log(title2[0]);
title2[0].innerText = "Got you 2";

console.log(title3);
title3.innerText = "Got you 3 from querySelector";

console.log(title4[3]);
title4[3].innerText = "Got you 5 from querySelectorAll";

console.log(title6);
// title6.innerText = "Got you 6 from querySelector";
