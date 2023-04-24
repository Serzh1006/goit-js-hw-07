import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1. Создание и добавление изображений в список

const galleryList = document.querySelector(".gallery");

function createListImages(galleryItems) {
  return galleryItems
    .map((obj) => {
      const itemList = `<li class="gallery__item"><a class="gallery__link" href="${obj.original}">
			<img class="gallery__image" src="${obj.preview}" alt="${obj.description}" /></a></li>`;
      return itemList;
    })
    .join("");
}
const listImages = createListImages(galleryItems);
galleryList.insertAdjacentHTML("beforeend", listImages);

// 2. Открытие галереи изображений по клику

galleryList.addEventListener("click", onClickgetLink);

function onClickgetLink(e) {
  e.preventDefault();
  const clickEl = e.target.nodeName;
  if (clickEl !== "IMG") {
    return;
  }

  const gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}
