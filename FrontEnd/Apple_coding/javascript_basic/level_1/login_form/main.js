document.getElementById("id").addEventListener('input', () => { console.log("input") });
document.getElementById("pw").addEventListener('input', () => { console.log("change") });

// [로그인] 버튼 누름
document.querySelector("#login").onclick = () => {
  document.querySelector(".modal").classList.add("show-modal");    // classList.add()
}
// [닫기] 버튼 누름
document.querySelector("#close").onclick = () => {
  document.querySelector(".modal").classList.remove("show-modal");  // classList.remove()
}
// [전송] 버튼 누름
document.querySelector("form").addEventListener("submit", () => {   // "submit" event
  if (document.querySelector("#id").value === "") {
    alert("ID와 PW를 확인해주세요");
    event.preventDefault()
  }
  else if (document.querySelector("#pw").value.length < 6) {
    alert("6자 이상의 PW를 입력해주세요");
    event.preventDefault()
  }
  else {
    location.href = "success.html";
  }
})
