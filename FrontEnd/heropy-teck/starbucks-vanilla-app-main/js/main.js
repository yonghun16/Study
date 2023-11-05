/* 헤더 돋보기 이펙트*/
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  //searchEl 요소를 클릭하면, input요소(searchInputEl)이 focus를 활성화 함.
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  //searchInputEl의 focus가 활성화 된다면, focused 클래스를 추가함.
  searchEl.classList.add("focused");
  //setAttribute = html의 속성(Attribute)를 설정함.
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

/* 뱃지 */
const badgeEl = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    // _.throttle(함수, 시간(밀리세컨 단위))
    // lodash.js 사용, 0.3초 마다 부하를 줘서 스크롤 이벤트 중복 발생 억제
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 배지 숨기기
      // 요소를 자연스럽게 숨기기 위해서 and 숨김 요소를 클릭을 방지하기 위해 gsap.js 사용 
      //gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, .6, {
        opacity: 0,
        display: 'none'
      });
    } else {
      // 배지 보이기
      gsap.to(badgeEl, .6, {
        opacity: 1,
        display: 'block'
      });
    }
  }, 300)
);


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gasp.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,  // 0.7s, 1.4s, 2.1s, 2.7s 딜레이되면서 작동
    opacity: 1
  });
});
