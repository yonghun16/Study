// 태그를 가져오는 방법(getElementById, querySelector)
const timeElement = document.getElementById("time1");
const timeElement2 = document.querySelector(".time2");

// 태그의 스타일를 변경하는 방법
timeElement.style.color = "tomato";
timeElement.style.backgroundColor = "lightgray";
timeElement.style.fontWeight = "bold";
timeElement.style.fontSize = "40px";
timeElement.innerHTML = "01:03";

timeElement2.innerHTML = "12:05";
timeElement2.style.color = "orange";
timeElement2.style.fontSize = "40px";


// 웹페이지 타이틀 수정
document.title = "♥️♥️♥️"

// 이벤트
timeElement.addEventListener("click", function() {
  if (timeElement.style.color === "yellow") {
    timeElement.style.color = "tomato";
  }
  else {
    timeElement.style.color = "yellow";
  }
  timeElement.style.backgroundColor = "black";
})
timeElement.addEventListener("copy", function() {
  timeElement.style.color = "gray";
})

