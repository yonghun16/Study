document.querySelector('.badge').addEventListener('click', () =>{
  document.querySelector('.themebox').classList.toggle('dark-mode');
  document.querySelector('.badge').classList.toggle('bg-white');
  document.querySelector('.img-sun').classList.toggle('hidden');
  document.querySelector('.img-moon').classList.toggle('hidden');
})
