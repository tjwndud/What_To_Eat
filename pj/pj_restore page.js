document.addEventListener('DOMContentLoaded', function () {
  const searchResults = document.querySelector('.search-results');
  const backButton = document.querySelector('.back-button'); // 뒤로가기 버튼 선택
  const footer = document.querySelector('.footer'); // footer 요소 선택

  const resultsPerPage = 3; // 한 페이지당 결과 수
  const totalResults = 30; // 총 결과 수 (예시로 30개라고 가정)

  // 초기 페이지 설정
  let currentPage = 1;
  showResults(currentPage);

  // 페이지 버튼 생성
  function createPaginationButtons() {
    const numPages = Math.ceil(totalResults / resultsPerPage);
    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination');

    for (let i = 1; i <= numPages; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.addEventListener('click', function () {
        currentPage = i;
        showResults(currentPage);
      });
      paginationContainer.appendChild(button);
    }

    // 페이지 버튼을 중앙 아래로 이동
    footer.innerHTML = ''; // 기존 페이지 버튼 삭제
    footer.appendChild(paginationContainer); // 새로운 페이지 버튼 추가
  }

  // 결과 표시
  function showResults(page) {
    searchResults.innerHTML = '';

    const startIndex = (page - 1) * resultsPerPage;
    const endIndex = Math.min(startIndex + resultsPerPage, totalResults);

    for (let i = startIndex; i < endIndex; i++) {
      const result = document.createElement('div');
      result.classList.add('result');
      result.innerHTML = `
                    <span class="result-number">${i + 1}</span>
                    <div class="result-info">
                        <img src="restaurant${i + 1}.jpg" alt="음식점 이미지">
                        <h2 class="restaurant-name">음식점 이름 ${i + 1}</h2>
                        <p class="restaurant-description">간단한 음식점 소개</p>
                    </div>
                `;
      searchResults.appendChild(result);
    }

    createPaginationButtons(); // 페이지 버튼 생성
  }

  // 뒤로가기 버튼 클릭 시 브라우저 이전 페이지로 이동
  backButton.addEventListener('click', function () {
    window.history.back();
  });
});
