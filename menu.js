// menu.js
const headerMenu = document.querySelector(".header-menu");
const btnMenu = document.querySelector(".btn-menu");

if (headerMenu && btnMenu) {
  btnMenu.addEventListener("click", () => {
    headerMenu.classList.toggle("is-open");

    const aberto = headerMenu.classList.contains("is-open");
    btnMenu.setAttribute("aria-expanded", aberto ? "true" : "false");
  });

  // fecha ao clicar em um link
  document.querySelectorAll(".header-menu .link a").forEach((a) => {
    a.addEventListener("click", () => {
      headerMenu.classList.remove("is-open");
      btnMenu.setAttribute("aria-expanded", "false");
    });
  });
}
