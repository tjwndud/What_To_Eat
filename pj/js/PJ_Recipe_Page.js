document.addEventListener('DOMContentLoaded', function () {
  const searchResults = document.querySelector('.search-results');
  const backButton = document.querySelector('.back-button'); // 뒤로가기 버튼 선택
  const footer = document.querySelector('.footer'); // footer 요소 선택

  const numResults = 30; // 예시로 10개의 결과를 가정합니다.
  const resultsPerPage = 10; // 한 페이지당 결과 수
  const numColumns = 5; // 한 줄당 열의 수
  const numRows = 2; // 전체 행의 수
  // 초기 페이지 설정
  let currentPage = 1;
  showResults(currentPage);

  function createPaginationButtons() {
    const numPages = Math.ceil(numResults / resultsPerPage);
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
    searchResults.innerHTML = ''; // 기존 결과 지우기

    const startIndex = (page - 1) * resultsPerPage;
    const endIndex = Math.min(startIndex + resultsPerPage, numResults);

    for (let i = startIndex; i < endIndex; i++) {
      const result = document.createElement('div');
      result.classList.add('result');
      result.innerHTML = `
                    <span class="result-number">${i + 1}</span>
                    <div class="result-info">
                    <img src="recipe${i + 1}.jpg">
                    <h4 class="recipet name">음식 이름 ${i + 1}</h4>
                    </div>
                    
                    
                `;
      searchResults.appendChild(result);

      // 결과 요소를 클릭할 때의 동작 설정
      result.addEventListener('click', function () {
        // 클릭한 요소의 정보를 사용하여 원하는 동작을 수행
        console.log(`You clicked on result ${i + 1}`);
        // 예시: 클릭한 요소의 상세 정보를 표시하는 함수 호출
        // displayResultDetails(i + 1);
        window.location.href = 'PJ_In_Recipe_Page.html';
      });
    }

    createPaginationButtons(); // 페이지 버튼 생성
  }

  // 뒤로가기 버튼 클릭 시 브라우저 이전 페이지로 이동
  backButton.addEventListener('click', function () {
    window.history.back();
  });
});
