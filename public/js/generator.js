// кнопки на карусели с узором
const patternPrev = document.querySelector('.carousel-control-prev[data-bs-target="#carouselExample"]');
const patternNext = document.querySelector('.carousel-control-next[data-bs-target="#carouselExample"]');
// кнопки на карусели с цветом
const prevBtnTwo = document.querySelector('.carousel-control-prev[data-bs-target="#carouselExample-two"]');
const colorNext = document.querySelector('.carousel-control-next[data-bs-target="#carouselExample-two"]');

const carouselInner = document.querySelector('.carousel-inner');
const sockPattern = document.querySelector('.sockPattern');

const sockBckg = document.querySelector('.sockBckg');

const activeColor = document.querySelector('.carousel-item, .color')
console.log(activeColor)


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





prevBtnTwo?.addEventListener('click', (e) => {
  const activeChildArr = e.target.parentNode.parentNode.firstChild.childNodes;
  
  const activeChild = Array.from(activeChildArr).filter((el) => el.className.includes('active'));
  console.log(activeChild);
  // console.log(activeChild[0].firstChild.previousElementSibling.getAttribute('data-color'))
});
