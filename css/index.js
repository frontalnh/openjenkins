const squareElem = document.getElementById('square');
console.log(squareElem);
squareElem.addEventListener('click', e => {
  squareElem.style.width = '200px';
});
