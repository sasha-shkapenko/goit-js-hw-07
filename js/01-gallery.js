import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', onPictureClick);

function makeGallery(galleryArray) {
     return galleryArray.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img 
    class="gallery__image"
    src="${preview}" 
    data-source="${original}" 
    alt="${description}"
    />
  </a>
</div>`;
    }).join('');
}

galleryEl.insertAdjacentHTML('beforeend', makeGallery(galleryItems));

function onPictureClick (e){ 
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    e.preventDefault();
    showModal(e.target.dataset.source);
}

let instance;
function showModal(src) {
    instance = basicLightbox.create(`
    <div class="modal">
        <img src="${src}"></img>
    </div>
`)
    instance.show();
    onModalOpen();
}

function onModalOpen() {
    window.addEventListener("keydown", onEscPress);
}

function onEscPress(event) {
    if (event.code === "Escape") {
        instance.close();
        onModalClose();
    }
}

function onModalClose() {
    window.removeEventListener("keydown", onEscPress);
}

