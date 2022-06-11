import getElement from './getElement.js';

const container = getElement('.slide-container');

const goSlider = (type) => {
  const active = getElement('.active');
  const last = getElement('.last');
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove('active');
  last.classList.remove('last');
  next.classList.remove('next');

  if (type === 'prev') {
    active.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove('next');
    next.classList.add('last');
    return;
  }

  active.classList.add('next');
  last.classList.add('active');
  next.classList.add('last');
};

export default goSlider;
