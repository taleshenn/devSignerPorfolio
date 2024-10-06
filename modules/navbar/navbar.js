const menuIcon = document.querySelector(".navbar__menu-icon");
const navigation = document.querySelector(".navbar__navigation");
const overlay = document.querySelector(".overlay");
const navigationLinks = document.querySelectorAll(".navbar__navigation a");
const logoLink = document.querySelector(".navbar__logo a");

menuIcon.addEventListener("click", () => {
  navigation.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("active");
    document.body.classList.remove("no-scroll");
    overlay.classList.remove("active");
  });
});

logoLink.addEventListener("click", () => {
  navigation.classList.remove("active");
  document.body.classList.remove("no-scroll");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  navigation.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
  overlay.classList.toggle("active");
});
