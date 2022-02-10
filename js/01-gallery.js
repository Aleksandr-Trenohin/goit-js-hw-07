import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// 1
const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

const galleryList = galleryItems
  .map(
    item => `<div class="gallery__item">
  
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.preview}"
      alt="${item.description}"
    />
  
</div>`,
  )
  .join('');
// console.log(galleryList);
// <a class="gallery__link" href="${item.preview}"></a>

galleryEl.innerHTML = galleryList;

// 2
galleryEl.addEventListener('click', onPreviewClick);
function onPreviewClick(evt) {
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  console.log(evt.target.nodeName);
  console.log(evt.target.dataset.source);
}

// 4

const instance2 = basicLightbox.create(`
    <img src="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg">
`);

instance2.show();
