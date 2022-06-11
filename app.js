import people from './data.js';
import showPeople from './src/showPeople.js';
import goSlider from './src/startSlider.js';
import getElement from './src/getElement.js';

const prevBtn = getElement('.prev-btn');
const nextBtn = getElement('.next-btn');
const container = getElement('.slide-container');

if (people.length === 1) {
  prevBtn.style.display = 'none';
  next.style.display = 'none';
}
nextBtn.addEventListener('click', () => {
  goSlider();
});

prevBtn.addEventListener('click', () => {
  goSlider('prev');
});

container.innerHTML = showPeople;
