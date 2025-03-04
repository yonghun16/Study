const form = document.querySelector("#login-form");


const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);    // HTML 폼(form)에서 입력된 데이터를 FormData 객체로 생성 formData 객체는 폼 데이터를 key-value 쌍으로 저장

  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);


  const res = await fetch('/login', {
    method: "post",
    body: formData,
  });
  const data = await res.json();
  const accessToken = data.access_token;

  window.localStorage.setItem("accessToken", accessToken);
  window.sessionStorage.setItem("accessToken", accessToken);


  if (res.status === 200) {
    console.log(res.status);
    const infoDiv = document.querySelector("#info");
    infoDiv.innerText = "로그인에 성공했습니다.";

    window.location.pathname="/";

    //const btn = document.createElement("button");
    //btn.innerText = "상품 가져오기!";
    //
    //btn.addEventListener("click", async () => {
    //  console.log("Access Token:", accessToken); // 추가
    //  const res = await fetch("/items", {
    //    headers: {
    //      "Authorization": `Bearer ${accessToken}`,
    //      "Content-Type": "application/json",  // 추가
    //    },
    //  });
    //  const data = await res.json();
    //  console.log("Response Status:", res.status);
    //  console.log("Response Data:", data);
    //});
    //infoDiv.appendChild(btn);

    //window.location.pathname="/";
  } else if (res.status === 401) {
    alert('로그인에 실패했습니다.');
  }
};

form.addEventListener("submit", handleSubmit);
