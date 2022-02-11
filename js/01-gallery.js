import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const galleryList = galleryItems
  .map(
    item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
      onclick="event.preventDefault()"
    />
 </a >
</div>`,
  )
  .join('');

galleryEl.innerHTML = galleryList;

galleryEl.addEventListener('click', onPreviewClick);
function onPreviewClick(evt) {
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  createLightbox(evt);
}

function createLightbox(evt) {
  const instance = basicLightbox.create(`
  <img src="${evt.target.dataset.source}">
`);
  instance.show();

  galleryEl.addEventListener('keydown', onEscClick);
  function onEscClick(evt) {
    if (!(evt.code === 'Escape')) {
      return;
    }
    if (evt.code === 'Escape') {
      instance.close();
      galleryEl.removeEventListener('keydown', onEscClick);
    }
  }
}
