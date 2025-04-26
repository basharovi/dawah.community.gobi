// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for anchor links
  const navLinks = document.querySelectorAll("a.nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });
});
