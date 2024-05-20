document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuIcon = document.querySelector(".mobile-menu");
  const mobileNav = document.querySelector(".mobile-nav");

  mobileMenuIcon.addEventListener("click", () => {
    if (mobileNav.classList.contains("closed-menu")) {
      mobileNav.classList.remove("closed-menu");
      mobileNav.classList.add("open-menu");
    } else {
      mobileNav.classList.remove("open-menu");
      mobileNav.classList.add("closed-menu");
    }
  });

  const closeMenuIcon = document.querySelector(".tabler-icon-x");
  closeMenuIcon.addEventListener("click", () => {
    mobileNav.classList.remove("open-menu");
    mobileNav.classList.add("closed-menu");
  });
});
