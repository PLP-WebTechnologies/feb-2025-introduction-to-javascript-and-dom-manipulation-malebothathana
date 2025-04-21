// Get elements
const titleElement = document.getElementById('title');
const paragraphElement = document.getElementById('paragraph');
const changeTextBtn = document.getElementById('change-text-btn');
const changeStyleBtn = document.getElementById('change-style-btn');
const addRemoveElementBtn = document.getElementById('add-remove-element-btn');

// Add event listeners
changeTextBtn.addEventListener('click', changeText);
changeStyleBtn.addEventListener('click', changeStyle);
addRemoveElementBtn.addEventListener('click', addRemoveElement);

// Functions
function changeText() {
    paragraphElement.textContent = 'This is the new paragraph text.';
}

function changeStyle() {
    titleElement.style.color = '#FFD700'; // gold
    titleElement.style.fontSize = '2em';
}

function addRemoveElement() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new paragraph.';
    const contentElement = document.getElementById('content');
    if (contentElement.children.length > 2) {
        contentElement.removeChild(contentElement.lastChild);
    } else {
        contentElement.appendChild(newElement);
    }
}
