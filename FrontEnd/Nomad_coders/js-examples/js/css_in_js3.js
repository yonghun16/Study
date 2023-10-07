const h1 = document.querySelector(".grab_class h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  }
  else {
    h1.classList.add(clickedClass);
  }
}

h1.addEventListener("click", handleTitleClick);

