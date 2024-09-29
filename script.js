document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".fa-bars");
  const closeIcon = document.querySelector(".fa-times");
  const navMenu = document.querySelector("nav ul");

  hamburger.addEventListener("click", function () {
      navMenu.classList.add("show-menu"); // Show the nav menu
  });

  closeIcon.addEventListener("click", function () {
      navMenu.classList.remove("show-menu"); // Hide the nav menu
  });
});
