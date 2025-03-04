const form = document.querySelector("#signup-form");

const checkPassword = () => {
  const formData = new FormData(form);
  const password1 = formData.get('password');
  const password2 = formData.get('password2');
  if (password1 === password2) {
    return true;
  } else false;
}

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);  // HTML 폼(form)에서 입력된 데이터를 FormData 객체로 생성 formData 객체는 폼 데이터를 key-value 쌍으로 저장

  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  console.log(formData.get("password"))

  const div = document.querySelector("#info");

  if (checkPassword()) {
    const res = await fetch('/signup', {
      method: "post",
      body: formData,
    });
    const data = await res.json();
    if (data === "200") {
      div.innerText = "회원가입에 성공했습니다!";
      alert('회원 가입에 성공했습니다.');
      window.location.pathname="/login.html";
    }
  } else {
    div.innerText = "비밀번호가 같지 않습니다";
    div.style.color = "red";
  }

};

// form.addEventListener("submit", handleSubmit) 코드는 html의 form submit 이벤트를 가로채서 handleSubmit 함수를 실행함.
// HTML -> JS -> Python
form.addEventListener("submit", handleSubmit);


