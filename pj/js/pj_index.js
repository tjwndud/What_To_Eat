// 네비게이션 바 토글 버튼 기능
const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// 화면 크기에 따라 글꼴 크기와 본문의 크기를 조절하는 함수
function adjustFontSize() {
  // 화면 너비에 따라 글꼴 크기 조절
  const screenWidth = window.innerWidth;
  let fontSize = 16;
  if (screenWidth <= 768) {
    fontSize = 14;
  }
  document.body.style.fontSize = fontSize + 'px';

  // 화면 너비에 따라 본문 크기 조절
  let contentFontSize = 1;
  if (screenWidth <= 768) {
    contentFontSize = 0.9;
  }
  document.querySelector('.main-content').style.fontSize =
    contentFontSize + 'em';
}

// 화면 크기가 변경될 때마다 adjustFontSize 함수 호출
window.addEventListener('resize', adjustFontSize);

// 페이지 로드 시 한 번 실행하여 초기 설정
adjustFontSize();
