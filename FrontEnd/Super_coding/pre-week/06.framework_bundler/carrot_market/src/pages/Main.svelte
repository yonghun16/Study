<script>
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  setInterval(() => (min = min + 1), 1000)
</script>


<div class="media-info-msg">화면 크기를 줄여주세요</div>
<header>
  <div class="info-bar">
    <div class="info-bar__time">{hour}:{min}</div>
    <div class="info-bar__icons">
      <img src="assets/chart-bar.svg" alt="chart-bar">
      <img src="assets/wifi.svg" alt="wifi-bar">
      <img src="assets/battery.svg" alt="battery">
    </div>
  </div>
  <div class="menu-bar">
    <div class="menu-bar__locaiton">
      <span>역삼1동</span>
      <img src="assets/chevron-down.svg" alt="">
    </div>
    <div class="menu-bar__icons">
      <img src="assets/magnifying-glass.svg" alt="">
      <img src="assets/bars-3.svg" alt="">
      <img src="assets/bell.svg" alt="">
    </div>
  </div>
</header>

<main>
  <a class="write-btn" href="/#/write">+글쓰기</a>
</main>

<footer>
  <div class="footer-bar">
    <div class="footer-icons">
      <img src="assets/home.svg" alt="">
      <div>홈</div>
    </div>
    <div class="footer-icons">
      <img src="assets/newspaper.svg" alt="">
      <div>동네생활</div>
    </div>
    <div class="footer-icons">
      <img src="assets/map-pin.svg" alt="">
      <div>내 근처</div>
    </div>
    <div class="footer-icons">
      <img src="assets/chat-buble.svg" alt="">
      <div>채팅</div>
    </div>
    <div class="footer-icons">
      <img src="assets/user.svg" alt="">
      <div>나의 당근</div>
    </div>
  </div>
</footer>
