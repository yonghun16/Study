// 메모 수정 함수
async function editMemo(event) {
  const id = event.target.dataset.id;
  const editInput = prompt('수정할 값을 입력하세요');
  const res = await fetch('memos/${id}', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      content: editInput,
    }),
  });
  readMemo();
}

// 메모 삭제 함수
async function deleteMemo(event) {
  const id = event.target.dataset.id;
  const res = await fetch(`memos/${id}`, {
    method: "DELETE",
  });
  readMemo();
}

// 메모 수정 버튼 및 실행
function displayMemo(memo) {
  const ul = document.querySelector('#memo-ul')

  const li = document.createElement("li");
  li.innerText = `${memo.content}`;

  const editBtn = document.createElement("button");
  editBtn.innerText = "수정하기";
  editBtn.addEventListener("click", editMemo)
  editBtn.dataset.id = memo.id;

  // 삭제 버튼 생성 및 실행
  const delBtn = document.createElement("button");
  delBtn.innerText = "삭제";
  delBtn.addEventListener("click", deleteMemo);
  delBtn.dataset.id = memo.id;

  ul.appendChild(li)
  li.appendChild(editBtn)
  li.appendChild(delBtn)
}

// 메모 조회
async function readMemo() {
  const res = await fetch("/memos")
  const jsonRes = await res.json();
  // jsonRes = [{id:"123", content:"rorem it sum"}]
  const ul = document.querySelector('#memo-ul')
  ul.innerHTML = "";
  jsonRes.forEach(displayMemo)
}

// 메모 생성
async function createMemo(value) {
  const res = await fetch("/memos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: new Date().getTime(),
      content: value,
    }),
  });
  readMemo()
}

function handleSubmit(event) {
  event.preventDefault();
  const input = document.querySelector("#memo-input");
  createMemo(input.value);
  input.value = "";
}

const form = document.querySelector("#memo-form");
form.addEventListener("submit", handleSubmit);

readMemo()
