const apple = document.getElementById("menu");

const menuOptionsRender = `<button class="apple__menu__item">
    About This Mac
    </button>
    <div class="apple__menu--dividers"></div>
    <button class="apple__menu__item">
    System Settings...
    </button>
    <div class="apple__menu--dividers"></div>
    <button class="apple__menu__item">
    Sleep
    </button>
    <button class="apple__menu__item">
    Restart...
    </button>
    <button class="apple__menu__item">
    Shut down...
    </button>`;

let menu = document.getElementById("apple__menu");

apple.addEventListener("click", (event) => {
  event.preventDefault();
  menu.style.display = menu.style.display === "none" ? "flex" : "none";
  menu.innerHTML = `${menuOptionsRender}`;
});

// Would like to figure out how to close it without hitting the same button.
