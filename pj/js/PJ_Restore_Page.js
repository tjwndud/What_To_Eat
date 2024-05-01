document.addEventListener('DOMContentLoaded', function () {
  const searchResults = document.querySelector('.search-results');
  const backButton = document.querySelector('.back-button'); // 뒤로가기 버튼 선택
  const footer = document.querySelector('.footer'); // footer 요소 선택
  const paginationContainer = document.createElement('div'); // 페이지 버튼을 담을 컨테이너

  const resultsPerPage = 10; // 한 페이지당 결과 수
  const totalResults = 30; // 총 결과 수 (예시로 30개라고 가정)

  // 초기 페이지 설정
  let currentPage = 1;
  showResults(currentPage);

  // 페이지 버튼 생성
  function createPaginationButtons() {
    paginationContainer.innerHTML = ''; // 기존 페이지 버튼 제거

    const numPages = Math.ceil(totalResults / resultsPerPage);
    for (let i = 1; i <= numPages; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.addEventListener('click', function () {
        currentPage = i;
        showResults(currentPage);
      });
      paginationContainer.appendChild(button);
    }

    // 페이지 버튼 스타일 설정
    paginationContainer.style.display = 'flex';
    paginationContainer.style.justifyContent = 'center';
    paginationContainer.style.marginTop = '10px'; // 페이지 버튼과 결과창 사이의 간격 조정
    paginationContainer.style.visibility = 'hidden'; // 초기에는 보이지 않도록 설정
    footer.appendChild(paginationContainer); // 페이지 버튼을 footer에 추가

    // 추가한 CSS 스타일 적용
    paginationContainer.classList.add('pagination');
    const buttons = paginationContainer.querySelectorAll('button');
    buttons.forEach((button) => {
      button.classList.add('pagination-button');
    });
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
      result.addEventListener('click', function () {
        window.location.href = 'PJ_In_Restore_page.html'; // 클릭한 결과로 이동
      });
    }
  }

  // 뒤로가기 버튼 클릭 시 브라우저 이전 페이지로 이동
  backButton.addEventListener('click', function () {
    window.history.back();
  });

  // 스크롤을 내릴 때 페이지 버튼을 보이도록 설정
  window.addEventListener('scroll', function () {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 20 // 최하단에서 20px 이전에 페이지 버튼을 표시
    ) {
      paginationContainer.style.visibility = 'visible';
    } else {
      paginationContainer.style.visibility = 'hidden';
    }
  });

  // 페이지 버튼 생성
  createPaginationButtons();
});
