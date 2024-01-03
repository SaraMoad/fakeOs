import { binFilesArr } from "./modules/binObject.js";
import { addTextElement } from "./modules/appFunctions.js";

const binApp = document.images.namedItem("appBin");
const binModal = document.getElementById("binModal");
const binElement = document.querySelector("#binModal");

const binRender = () => {
  const container = document.createElement("div");
  container.classList.add("bin__container");
  binElement.appendChild(container);

  const header = document.createElement("div");
  header.classList.add("bin__header");
  container.appendChild(header);

  const exit = document.createElement("button");
  exit.setAttribute("id", "exitButton");
  const exitButton = document.createElement("div");
  exitButton.classList.add("exit__button");
  exitButton.appendChild(exit);
  header.appendChild(exitButton);

  const headerText = document.createElement("div");
  addTextElement("h4", "Bin", headerText, "header__text");
  header.appendChild(headerText);

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("empty__button");
  const emptyButton = document.createElement("button");
  emptyButton.innerText = "empty";
  emptyButton.setAttribute("id", "empty");
  buttonDiv.appendChild(emptyButton);
  header.appendChild(buttonDiv);

  const binFilesContainer = document.createElement("div");
  binFilesContainer.classList.add("bin__files");
  container.appendChild(binFilesContainer);

  const list = document.createElement("li");
  list.setAttribute("id", "binList");
  binFilesContainer.appendChild(list);

  binFilesArr.map((item) => {
    const listItem = document.createElement("ul");
    listItem.classList.add("bin__list__item");
    list.appendChild(listItem);

    const icon = document.createElement("img");
    icon.src = item.src;
    icon.alt = item.alt;
    icon.classList.add("bin__list__item--icon");
    listItem.appendChild(icon);
    addTextElement("p", `${item.name}`, listItem, "bin__list__item--title");
  });
};

binApp.addEventListener("click", (event) => {
  event.preventDefault();
  binModal.innerHTML = "";
  binRender();
  binModal.style.display = "flex";
  let close = document.getElementById("exitButton");

  close.addEventListener("click", (event) => {
    event.preventDefault();
    binModal.style.display = "none";
    binModal.innerHTML = "";
  });

  let empty = document.getElementById("empty");

  empty.addEventListener("click", (event) => {
    event.preventDefault();
    let list = document.getElementById("binList");
    list.innerHTML = "";
  });
});
