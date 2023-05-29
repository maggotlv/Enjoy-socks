// кнопки на карусели с узором
const patternPrev = document.querySelector('.carousel-control-prev[data-bs-target="#carouselExample"]');
const patternNext = document.querySelector('.carousel-control-next[data-bs-target="#carouselExample"]');
// кнопки на карусели с цветом
const colorPrev = document.querySelector('.carousel-control-prev[data-bs-target="#carouselExample-two"]');
const colorNext = document.querySelector('.carousel-control-next[data-bs-target="#carouselExample-two"]');
// кнопки на карусели с лого
const logoPrev = document.querySelector('.carousel-control-prev[data-bs-target="#carouselExample-three"]');
const logoNext = document.querySelector('.carousel-control-next[data-bs-target="#carouselExample-three"]');

const sockPattern = document.querySelector('.sockPattern');
const sockBckg = document.querySelector('.sockBckg');
const sockLogo = document.querySelector('.sockLogo');

const carouselInner = document.querySelector('.carousel-inner');
const carouselTwo = document.querySelector('#carouselExample-two');
const carouselThree = document.querySelector('#carouselExample-three');

// скрипт пролистывания узора назад
patternPrev?.addEventListener('click', () => {
  const pattern = document.querySelector('.active');
  const previous = pattern.previousElementSibling;
  if (previous === null) {
    sockPattern.src = carouselInner.lastChild.firstChild.src;
  }
if (previous) {
    sockPattern.src = previous.firstChild.src;
  }
});
// скрипт пролистывания узора вперёд
patternNext?.addEventListener('click', () => {
  const pattern2 = document.querySelector('.active');
  const next = pattern2.nextElementSibling;
  if (next === null) {
    sockPattern.src = carouselInner.firstChild.firstChild.src;
  }
  if (next) {
    sockPattern.src = next.firstChild.src;
  }
});
// скрипт пролистывания цвета назад
colorPrev?.addEventListener('click', () => {
  const activeColor = document.querySelector('.carousel-item.color.active');
  const previousColor = activeColor.previousElementSibling;
  if (previousColor === null) {
    sockBckg.style.background = carouselTwo.firstChild.lastChild.firstChild.style.background;
  }
  if (previousColor) {
    sockBckg.style.background = previousColor.firstChild.style.background;
  }
});
// скрипт пролистывания цвета вперёд
colorNext?.addEventListener('click', () => {
  const activeColor = document.querySelector('.carousel-item.color.active');
  const nextColor = activeColor.nextElementSibling;
  if (nextColor === null) {
    sockBckg.style.background = carouselTwo.firstChild.firstChild.firstChild.style.background;
  }
  if (nextColor) {
    sockBckg.style.background = nextColor.firstChild.style.background;
  }
});
// скрипт пролистывания лого назад
logoPrev?.addEventListener('click', () => {
  const activeLogo = document.querySelector('.carousel-item.logo.active');
  const previousLogo = activeLogo.previousElementSibling;
  if (previousLogo === null) {
    sockLogo.src = carouselThree.firstChild.lastChild.firstChild.src;
  }
  if (previousLogo) {
    sockLogo.src = previousLogo.firstChild.src;
  }
});
// скрипт пролистывания лого вперёд
logoNext?.addEventListener('click', () => {
  const activeLogo = document.querySelector('.carousel-item.logo.active');
  const nextLogo = activeLogo.nextElementSibling;
  if (nextLogo === null) {
    sockLogo.src = carouselThree.firstChild.firstChild.firstChild.src;
  }
  if (nextLogo) {
    sockLogo.src = nextLogo.firstChild.src;
  }
});
