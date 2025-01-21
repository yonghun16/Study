const h1 = document.querySelector(".grab_class h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleTitleClick);

