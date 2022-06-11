import people from './data.js';

const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  else {
    throw new Error('Not found that element');
  }
};

const container = getElement('.slide-container');
const prevBtn = getElement('.prev-btn');
const nextBtn = getElement('.next-btn');

if (people.length === 1) {
  prevBtn.style.display = 'none';
  next.style.display = 'none';
}

container.innerHTML = people
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let position = 'next';
    if (slideIndex === 0) {
      position = 'active';
    }
    if (slideIndex === people.length - 1) {
      position = 'last';
    }
    return ` <article class="slide ${position}">
          <img
            src="${img}"
            class="img"
            alt="peter doe"
          />
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">
            ${text}
          </p>
          <div class="quote-icon">
            <i class="fas fa-quote-right"></i>
          </div>
        </article>`;
  })
  .join('');

const goSlider = (type) => {
  const active = getElement('.active');
  const last = getElement('.last');
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove(['active']);
  last.classList.remove(['last']);
  next.classList.remove(['next']);

  if (type === 'prev') {
    active.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.add('last');
    return;
  }

  active.classList.add('next');
  last.classList.add('active');
  next.classList.add('last');
};

nextBtn.addEventListener('click', () => {
  goSlider();
});
prevBtn.addEventListener('click', () => {
  goSlider('prev');
});
