import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import * as basicLightbox from "basiclightbox";

// 1. Создание и добавление изображений в список

const galleryList = document.querySelector(".gallery");

function createListImages(galleryItems) {
  return galleryItems
    .map((obj) => {
      const itemList = `<li class="gallery__item"><a class="gallery__link" href="${obj.original}">
			<img class="gallery__image" src="${obj.preview}" data-source="${obj.original}" alt="${obj.description}" /></a></li>`;
      return itemList;
    })
    .join("");
}
const listImages = createListImages(galleryItems);
galleryList.insertAdjacentHTML("beforeend", listImages);

// 2. Реализация делегирований событий и получение url original

galleryList.addEventListener("click", onClickgetLink);

function onClickgetLink(e) {
  e.preventDefault();
  const clickEl = e.target.nodeName;
  if (clickEl !== "IMG") {
    return;
  }
  const linkBigImg = e.target.dataset.source;
  const altText = e.target.alt;
  const instance = basicLightbox.create(`
      <div class="modal">
         <img src="${linkBigImg}" alt="${altText}" width="1280" height="800" />
      </div>
  `);

  instance.show();
}
