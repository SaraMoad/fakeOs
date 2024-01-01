const noteApp = document.images.namedItem("appNotes");
const modal = document.getElementById("noteModal");
const modalSelector = document.querySelector("#noteModal");

const addTextElement = (elementType, text, parent, cls) => {
  const newElement = document.createElement(elementType);
  const newText = document.createTextNode(text);
  newElement.classList.add(cls);
  newElement.appendChild(newText);
  parent.appendChild(newElement);
};

const noteRender = () => {
  const container = document.createElement("div");
  container.classList.add("note__container");
  modalSelector.appendChild(container);

  const list = document.createElement("li");
  list.classList.add("note__list");
  container.appendChild(list);

  const exit = document.createElement("button");
  exit.setAttribute("id", "exit");
  list.appendChild(exit);

  const listItem = document.createElement("ul");
  listItem.classList.add("note__list__item");
  list.appendChild(listItem);

  addTextElement("p", "New Note", listItem, "note__title");

  const newNote = document.createElement("div");
  newNote.classList.add("note__text");
  container.appendChild(newNote);

  const noteHeader = document.createElement("div");
  noteHeader.classList.add("note__header");
  newNote.appendChild(noteHeader);

  addTextElement("h3", "New Note", noteHeader);

  const input = document.createElement("textarea");
  input.classList.add("note__input");
  newNote.appendChild(input);
};

noteApp.addEventListener("click", (event) => {
  event.preventDefault();
  noteRender();
  modal.style.display = "flex";
  let close = document.getElementById("exit");

  close.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "none";
    modal.innerHTML = "";
  });
});
