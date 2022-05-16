const numberOfCategories = document.querySelector('ul#categories');

console.log('Number of categories:', numberOfCategories.children.length);

const namesOfCategories = numberOfCategories.querySelectorAll('h2');

namesOfCategories.forEach(CategoryEl => {
    console.log('Category:', CategoryEl.textContent);
    
    const numberOfElements = document.querySelector('li.item > ul');
    console.log('Elements:', numberOfElements.children.length);
});