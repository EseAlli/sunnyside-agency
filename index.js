const menuIcon = document.querySelector(".menu");
const menuList = document.querySelector(".menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("expanded");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    menuList.classList.remove("expanded");
  }
});
