const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesList = document.querySelector('ul.gallery');
console.log(imagesList);

imagesList.style.display = "flex";
imagesList.style.justifyContent = "space-between";

const markup = images
  .map((image) => `<li class="image-item">
  <img src = "${image.url}" alt = "${image.alt}" class="image-item-element">
   </li>`)
  .join("");

imagesList.insertAdjacentHTML("beforeend", markup);



// const elements = [];

// images.forEach(element => {
//   const imagesEl = document.createElement('li');
//   imagesEl.classList.add('image-item');


//   const imagesElItem = document.createElement('img');
//   imagesElItem.src = element.url;
//   imagesElItem.alt = element.alt;
//   imagesElItem.classList.add('image-item-element');


//   imagesEl.appendChild(imagesElItem);

//   elements.push(imagesEl);
// });

// console.log(elements);

// imagesList.append(...elements);

