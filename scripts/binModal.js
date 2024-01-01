const binApp = document.images.namedItem("appBin");
const binModal = document.getElementById("binModal");
const binElement = document.querySelector("#binModal");

const binFilesArr = [
  {
    name: "test-folder",
    icon: "folder",
    src: "./images/icons/dock/folderIcon.png",
    alt: `a test-folder`,
  },
  {
    name: "test-folder 2",
    icon: "folder",
    src: "./images/icons/dock/folderIcon.png",
    alt: `a test-folder`,
  },
  {
    name: "test-folder 3",
    icon: "folder",
    src: "./images/icons/dock/folderIcon.png",
    alt: `a test-folder`,
  },
  {
    name: "test-document 1",
    icon: "document",
    src: "./images/icons/dock/document.png",
    alt: `a test-document`,
  },
  {
    name: "test-document 2",
    icon: "document",
    src: "./images/icons/dock/document.png",
    alt: `a test-document`,
  },
];

const addingTextElement = (elementType, text, parent, cls) => {
  const newElement = document.createElement(elementType);
  const newText = document.createTextNode(text);
  newElement.classList.add(cls);
  newElement.appendChild(newText);
  parent.appendChild(newElement);
};

const binRender = () => {
  const container = document.createElement("div");
  container.classList.add("bin__container");
  binElement.appendChild(container);

  const header = document.createElement("div");
  header.classList.add("bin__header");
  container.appendChild(header);

  const exit = document.createElement("button");
  exit.setAttribute("id", "exit");
  const exitButton = document.createElement("div");
  exitButton.classList.add("exit__button");
  exitButton.appendChild(exit);
  header.appendChild(exitButton);

  const headerText = document.createElement("div");
  addingTextElement("h4", "Bin", headerText, "header__text");
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
    addingTextElement("p", `${item.name}`, listItem, "bin__list__item--title");
  });
};

binApp.addEventListener("click", (event) => {
  event.preventDefault();
  binRender();
  binModal.style.display = "flex";
  let close = document.getElementById("exit");

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
