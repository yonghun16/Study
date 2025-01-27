function createMemo(event) {
  event.preventDefault();
  console.log("test");
}

const form = document.querySelector("#memo-form")

form.addEventListener("submit", createMemo)
