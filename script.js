const navBar = document.querySelector(".navbar"),
  toggle = document.querySelector(".toggle"),
  modeSwitch = document.querySelector(".toggle-switch"),
  menuLinks = document.querySelectorAll(".menu-link");
  

toggle.addEventListener("click", () => {
  navBar.classList.toggle("open");
});
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.add("open");
  });
});
modeSwitch.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
