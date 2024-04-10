// 음식과 레시피의 예시 데이터
const foodRankingData = [
  { rank: 1, name: '피자', image: 'pizza.jpg', link: '피자.html' },
  { rank: 2, name: '스테이크', image: 'steak.jpg', link: '스테이크.html' },
  { rank: 3, name: '짜장면', image: 'jjajangmyeon.jpg', link: '짜장면.html' },
  { rank: 4, name: '초밥', image: 'sushi.jpg', link: '초밥.html' },
  { rank: 5, name: '파스타', image: 'pasta.jpg', link: '파스타.html' },
];

const recipeRankingData = [
  { rank: 1, name: '스파게티', image: 'spaghetti.jpg', link: '스파게티.html' },
  { rank: 2, name: '샐러드', image: 'salad.jpg', link: '샐러드.html' },
  {
    rank: 3,
    name: '치킨 카레',
    image: 'chicken_curry.jpg',
    link: '치킨_카레.html',
  },
  { rank: 4, name: '햄버거', image: 'hamburger.jpg', link: '햄버거.html' },
  { rank: 5, name: '라면', image: 'ramen.jpg', link: '라면.html' },
];

function generateRestaurantRanking() {
  const rankingList = document.getElementById('restaurant-ranking');
  rankingList.innerHTML = ''; // Clear previous contents

  // Generate restaurant ranking items dynamically
  foodRankingData.forEach((food) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${food.rank}</span>
      <img src="${food.image}" alt="${food.name}">
      <span>${food.name}</span>
      <a href="${food.link}" class="btn">바로가기</a>
    `;
    rankingList.appendChild(listItem);
  });
}

function generateRecipeRanking() {
  const rankingList = document.getElementById('recipe-ranking');
  rankingList.innerHTML = ''; // Clear previous contents

  // Generate recipe ranking items dynamically
  recipeRankingData.forEach((recipe) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${recipe.rank}</span>
      <img src="${recipe.image}" alt="${recipe.name}">
      <span>${recipe.name}</span>
      <a href="${recipe.link}" class="btn">바로가기</a>
    `;
    rankingList.appendChild(listItem);
  });
}

function showContent(contentType) {
  const restaurantContent = document.getElementById('ranking-container');
  const recipeContent = document.getElementById('recipe-content');

  if (contentType === 'restaurant') {
    restaurantContent.style.display = 'block';
    recipeContent.style.display = 'none';
    generateRestaurantRanking();
  } else if (contentType === 'recipe') {
    restaurantContent.style.display = 'none';
    recipeContent.style.display = 'block';
    generateRecipeRanking();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Initial content display
  const restaurantSelection = document.querySelector(
    '.selection-item:nth-child(1)'
  );
  restaurantSelection.classList.add('active');
  showContent('restaurant');

  // Event listener for selection container
  const selectionItems = document.querySelectorAll('.selection-item');
  selectionItems.forEach((item) => {
    item.addEventListener('click', function () {
      selectionItems.forEach((item) => item.classList.remove('active'));
      this.classList.add('active');
      const contentType =
        this.textContent.trim() === '음식점' ? 'restaurant' : 'recipe';
      showContent(contentType);
    });
  });
});
