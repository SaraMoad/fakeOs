const photoApp = document.images.namedItem("appPhotos");
const galleryModal = document.getElementById("galleryModal");
const galleryArray = [
  {
    name: "barbarian",
    id: 0,
    src: "./images/gallery/animalBarbarian.jpg",
    alt: "An angry strong orc woman",
  },
  {
    name: "catFolk",
    id: 1,
    src: "./images/gallery/catFolk.webp",
    alt: "a male ranger catfolk and a female assassin catfolk ",
  },
  {
    name: "gunslinger",
    id: 2,
    src: "./images/gallery/gunslinger.jpg",
    alt: "A western styled gunslinger woman",
  },
  {
    name: "pirates",
    id: 3,
    src: "./images/gallery/pirates.jpg",
    alt: "a portrait of a woman fighter",
  },
  {
    name: "rahalla",
    id: 4,
    src: "./images/gallery/rahalla.png",
    alt: "A half-orc woman spellcaster",
  },
  {
    name: "raqhium",
    id: 5,
    src: "./images/gallery/raqhium.jpg",
    alt: "A male catfolk ranger",
  },
  {
    name: "theaPendragon",
    id: 6,
    src: "./images/gallery/theaPendragon.png",
    alt: "A female full-plated paladin of Sarenrae",
  },
];

const newTextElement = (elementType, text, parent, cls) => {
  const newElement = document.createElement(elementType);
  const newText = document.createTextNode(text);
  newElement.classList.add(cls);
  newElement.appendChild(newText);
  parent.appendChild(newElement);
};

const galleryRender = () => {
  const container = document.createElement("div");
  container.classList.add("gallery__container");
  galleryModal.appendChild(container);

  const list = document.createElement("li");
  list.classList.add("gallery__list");
  const exit = document.createElement("button");
  container.appendChild(list);
  exit.setAttribute("id", "exit");
  list.appendChild(exit);
  newTextElement("p", "Photos", list, "list__header");

  const listItem = document.createElement("ul");
  listItem.classList.add("gallery__list__item");
  list.appendChild(listItem);
  newTextElement("p", "Library", listItem, "gallery__list__item--title");

  const library = document.createElement("div");
  library.classList.add("library");
  container.appendChild(library);

  const galleryHeader = document.createElement("div");
  galleryHeader.classList.add("gallery__header");
  library.appendChild(galleryHeader);
  newTextElement("h2", "Photos", galleryHeader);

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
  galleryModal.style.display = "flex";
  galleryRender();

  let close = document.getElementById("exit");
  close.addEventListener("click", (event) => {
    event.preventDefault();
    galleryModal.style.display = "none";
    galleryModal.innerHTML = "";
    open.pop();
  });
});
