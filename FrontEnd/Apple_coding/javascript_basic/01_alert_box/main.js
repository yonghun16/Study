function handleClose(color) {
  const box = document.querySelector(`.alert-box.${color}`);
  if (box !== null) {
    box.remove();
  }
}

function handleFlowBox() {
  const colors = ['yellow', 'blue', 'gray'];
  const alertBoxes = document.querySelector(".alert-boxes");
  for (let i = 0; i < 3; i++) {
    const box = document.querySelector(`.alert-box.${colors[i]}`);
    if (box !== null) {
      box.remove();
    }
  }
  for (let i = 0; i < 3; i++) {
    const box = document.createElement("div");
    box.classList.add("alert-box", `${colors[i]}`);

    const message = document.createElement("div");
    message.innerHTML = "<b>Holy guacamole!</b> You should check in on some of those fields blow.";

    const close = document.createElement("div");
    close.classList.add("close", `${colors[i]}`);
    close.onclick = () => handleClose(colors[i]);
    close.innerHTML = '<i class="fa-solid fa-x"></i>';

    box.appendChild(message);
    box.appendChild(close);
    alertBoxes.appendChild(box);

  }
}

const btnFlowBox = document.querySelector(".btn-flow-box");
btnFlowBox.addEventListener("click", handleFlowBox);

