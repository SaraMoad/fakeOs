import { addTextElement } from "./modules/appFunctions.js";
const noteApp = document.images.namedItem("appNotes");
const modal = document.getElementById("noteModal");
const modalSelector = document.querySelector("#noteModal");

const noteRender = () => {
  const noteContainer = document.createElement("div");
  noteContainer.classList.add("note__container");
  modalSelector.appendChild(noteContainer);

  const list = document.createElement("li");
  list.classList.add("note__list");
  noteContainer.appendChild(list);

  const exit = document.createElement("button");
  exit.setAttribute("id", "NoteModalClose");
  list.appendChild(exit);

  const listItem = document.createElement("ul");
  listItem.classList.add("note__list__item");
  list.appendChild(listItem);

  addTextElement("p", "New Note", listItem, "note__title");

  const newNote = document.createElement("div");
  newNote.classList.add("note__text");
  noteContainer.appendChild(newNote);

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
  modal.innerHTML = "";
  noteRender();
  modal.style.display = "flex";
  let close = document.getElementById("NoteModalClose");

  close.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "none";
    modal.innerHTML = "";
  });
});
