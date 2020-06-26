const gridContainer = document.querySelector('.grid-container');
let width = 16;
let height = 16;
let color = 'hsl(214, 12%, 15%)';
let rainbow = false;

const grid_btn = document.querySelector('#grid-btn');
const grid_input = document.querySelector('#grid-input');
const black_btn = document.querySelector('#black-btn');
const white_btn = document.querySelector('#white-btn');
const darken_btn = document.querySelector('#darken-btn');
const random_btn = document.querySelector('#random-btn');
const rainbow_btn = document.querySelector('#rainbow-btn');
const colorRandom = document.querySelector('.color-random');

grid_btn.addEventListener('click', function () {
  setGrid(Number(grid_input.value));
});

black_btn.addEventListener('click', function () {
  blackMode();
});

white_btn.addEventListener('click', function () {
  whiteMode();
});

random_btn.addEventListener('click', function () {
  randomMode();
});

rainbow_btn.addEventListener('click', function () {
  rainbowMode();
});

function setGrid(num) {
  width = num;
  height = num;

  removeGrid();
  createGrid(gridContainer, width, height);
}

function random() {
  return Math.floor(Math.random() * 255) + 1;
}

function blackMode() {
  rainbow = false;
  color = 'hsl(214, 12%, 15%)';

  black_btn.classList.add('active');
  white_btn.classList.remove('active');
  rainbow_btn.classList.remove('active');
}

function whiteMode() {
  rainbow = false;
  color = '#f0f3f5';

  black_btn.classList.remove('active');
  white_btn.classList.add('active');
  rainbow_btn.classList.remove('active');
}

function randomMode() {
  rainbow = false;
  color = `rgb(${random()}, ${random()}, ${random()})`;
  colorRandom.style.backgroundColor = color;
  black_btn.classList.remove('active');
  white_btn.classList.remove('active');
  rainbow_btn.classList.remove('active');
}

function rainbowMode() {
  rainbow = true;

  black_btn.classList.remove('active');
  white_btn.classList.remove('active');
  rainbow_btn.classList.add('active');
}

function draw(color) {
  if (rainbow) {
    color = `rgb(${random()}, ${random()}, ${random()})`;
  }
  event.target.style.background = color;
}

function createGrid(gridContainer, width, height) {
  let cards = width * height;
  let vh = window.innerHeight;

  for (i = 0; i < cards; i++) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.style.height = `${(vh - 32) / height}px`;
    card.style.width = `${(vh - 32) / width}px`;

    gridContainer.appendChild(card);
  }

  let allCards = document.querySelectorAll('.card');

  for (i = 0; i < cards; i++) {
    allCards[i].addEventListener('mouseover', function (event) {
      draw(color);
    });
  }
}

function removeGrid() {
  let allCards = document.querySelectorAll('.card');
  allCards.forEach(function (card) {
    card.remove();
  });
}

createGrid(gridContainer, width, height);
