const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  else {
    throw new Error('Not found that element');
  }
};
export default getElement;
