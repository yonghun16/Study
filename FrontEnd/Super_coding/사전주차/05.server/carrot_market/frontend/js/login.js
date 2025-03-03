const form = document.querySelector("#login-form");

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);  // HTML 폼(form)에서 입력된 데이터를 FormData 객체로 생성 formData 객체는 폼 데이터를 key-value 쌍으로 저장

  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const div = document.querySelector("#info");

  const res = await fetch('/login', {
    method: "post",
    body: formData,
  });
  const data = await res.json();
  if (res.status === 200) {
    alert('로그인에 성공했습니다.');
    console.log(res.status);
    window.location.pathname="/";
  } else if (res.status === 401) {
    alert('로그인에 실패했습니다.');
  }
};

form.addEventListener("submit", handleSubmit);
