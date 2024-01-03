const addTextElement = (elementType, text, parent, cls) => {
  const newElement = document.createElement(elementType);
  const newText = document.createTextNode(text);
  newElement.classList.add(cls);
  newElement.appendChild(newText);
  parent.appendChild(newElement);
};

export { addTextElement };
