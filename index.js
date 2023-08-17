const toggleButton = document.getElementById('toggleButton');
const boxCountInput = document.getElementById('boxCountInput');
const createButton = document.getElementById('createButton');
const gridContainer = document.querySelector('.grid-container');
const boxGrid = document.querySelector('.box-grid');
let isHoverMode = true; // Hover mode is the default

toggleButton.addEventListener('click', () => {
  isHoverMode = !isHoverMode;
  toggleButton.textContent = isHoverMode ? 'Hover Mode' : 'Click Mode';
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createBoxes(boxCount) {
  boxGrid.innerHTML = ''; // Clear existing boxes

  for (let i = 0; i < boxCount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');

    let currentColor = getRandomColor();
    box.style.backgroundColor = currentColor;

    box.addEventListener('mouseover', () => {
      if (isHoverMode) {
        currentColor = getRandomColor();
        box.style.backgroundColor = currentColor;
      }
    });

    box.addEventListener('click', () => {
      if (!isHoverMode) {
        currentColor = getRandomColor();
        box.style.backgroundColor = currentColor;
      }
    });

    boxGrid.appendChild(box);
  }
}

createButton.addEventListener('click', () => {
  const boxCount = parseInt(boxCountInput.value);
  if (!isNaN(boxCount)) {
    createBoxes(boxCount);
  }
});
