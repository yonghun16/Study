const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  //searchEl 요소를 클릭하면, input요소(searchInputEl)이 focus를 활성화 함.
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  //searchInputEl의 focus가 활성화 된다면, focused 클래스를 추가함.
  searchEl.classList.add('focused');
  //setAttribute = html의 속성(Attribute)를 설정함.
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});
