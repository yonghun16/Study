const title = document.querySelectorAll(".hello")

console.log(title)
title[2].style.color = "blue";

function handleTitleClick() {
  console.log("title was clicked!");
}

title[2].addEventListener("click", handleTitleClick)

