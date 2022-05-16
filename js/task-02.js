const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('ul#ingredients');

const elements = [];

ingredients.forEach(element => {
  const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');
  ingredientEl.textContent = element;

  elements.push(ingredientEl);
});

console.log(elements);

ingredientsList.append(...elements);








