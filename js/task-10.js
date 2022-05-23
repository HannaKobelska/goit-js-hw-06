// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  inputEl: document.querySelector('#controls > input'),
  divBoxes: document.querySelector('#boxes'),
};

let step = 30;

function createBoxes(amount) {

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    const randomColor = getRandomHexColor();
    divEl.style.backgroundColor = randomColor;

    divEl.style.width = step + "px";
    divEl.style.height = step + "px";

    step += 10;
  
    refs.divBoxes.append(divEl);
  }
}

function destroyBoxes() {
  refs.divBoxes.querySelectorAll('div').forEach(divElDel => {
    divElDel.remove();
  });
}

refs.createBtn.addEventListener('click', onCreateCollection);
refs.destroyBtn.addEventListener('click', onDeleteCollection);

function onCreateCollection(event) {
  createBoxes(refs.inputEl.value);
}

function onDeleteCollection(event) {
  destroyBoxes();
  step = 30;
}
