const menu = document.querySelector("[data-menu]");
const openBtn = document.querySelector("[data-menu-open]");
const closeBtn = document.querySelector("[data-menu-close]");
const menuLinks = document.querySelectorAll(".mobile-nav-link, .mobile-order-button");
const faqButtons = document.querySelectorAll(".faq-question");

function openMenu() {
  menu.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  menu.classList.remove("is-open");
  document.body.style.overflow = "";
}

openBtn.addEventListener("click", openMenu);
openBtn.addEventListener("mouseenter", openMenu);
closeBtn.addEventListener("click", closeMenu);
menu.addEventListener("mouseleave", closeMenu);

menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".faq-item").classList.toggle("is-open");
  });
});
