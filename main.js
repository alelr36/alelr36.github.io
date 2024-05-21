document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuIcon = document.querySelector(".mobile-menu");
  const mobileNav = document.querySelector(".mobile-nav");
  const closeMenuIcon = document.querySelector(".tabler-icon-x");

  const toggleMenu = () => {
    mobileNav.classList.toggle("closed-menu");
    mobileNav.classList.toggle("open-menu");
  };

  mobileMenuIcon.addEventListener("click", toggleMenu);

  if (closeMenuIcon) {
    closeMenuIcon.addEventListener("click", toggleMenu);
  }

  mobileNav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      toggleMenu();
    }
  });
});
