import { galleryArray } from "./modules/galleryobject.js";
import { addTextElement } from "./modules/appFunctions.js";
const photoApp = document.images.namedItem("appPhotos");
const galleryModal = document.getElementById("galleryModal");

const galleryRender = () => {
  const container = document.createElement("div");
  container.classList.add("gallery__container");
  galleryModal.appendChild(container);

  const list = document.createElement("li");
  list.classList.add("gallery__list");
  const exit = document.createElement("button");
  container.appendChild(list);
  exit.setAttribute("id", "galleryExit");
  list.appendChild(exit);
  addTextElement("p", "Photos", list, "list__header");

  const listItem = document.createElement("ul");
  listItem.classList.add("gallery__list__item");
  list.appendChild(listItem);
  addTextElement("p", "Library", listItem, "gallery__list__item--title");

  const library = document.createElement("div");
  library.classList.add("library");
  container.appendChild(library);

  const galleryHeader = document.createElement("div");
  galleryHeader.classList.add("gallery__header");
  library.appendChild(galleryHeader);
  addTextElement("h2", "Photos", galleryHeader);

  const galleryContainer = document.createElement("div");
  galleryContainer.classList.add("gallery__images__container");
  library.appendChild(galleryContainer);

  galleryArray.map((image) => {
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.classList.add("gallery__image");
    galleryContainer.appendChild(img);
  });
};

photoApp.addEventListener("click", (event) => {
  event.preventDefault();
  galleryModal.innerHTML = "";
  galleryModal.style.display = "flex";
  galleryRender();

  let close = document.getElementById("galleryExit");
  close.addEventListener("click", (event) => {
    event.preventDefault();
    galleryModal.style.display = "none";
    galleryModal.innerHTML = "";
  });
});
