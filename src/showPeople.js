import data from '../data.js';

let people = [...data];

const showPeople = people
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let position = 'next';
    if (slideIndex === 0) {
      position = 'active';
    }
    if (slideIndex === people.length - 1) {
      position = 'last';
    }
    if (people.length <= 1) {
      position = 'active';
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
export default showPeople;
