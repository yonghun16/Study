start_time = new Date();

function setTime(){
  const cur_time = new Date();
  const flow_time = new Date(cur_time - start_time);

  const min = flow_time.getMinutes().toString();
  const second = flow_time.getSeconds();
  const timeH1 = document.querySelector('.time');
  timeH1.innerText = `${min.padStart(2, '0')}:${second.toString().padStart(2, '0')}`
}

setInterval(setTime, 1000);
