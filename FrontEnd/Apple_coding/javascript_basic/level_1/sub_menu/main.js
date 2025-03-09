document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', function() {
  document.querySelector('.list-group').classList.toggle('show');
})

document.querySelectorAll('.list-group-item')[5].innerHTML = ('A sixth item');
