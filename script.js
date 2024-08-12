// burger

let burgerBtn = document.querySelector(".burger");
let xMark = document.querySelector(".xMark");
let mobileMenu = document.querySelector(".mobile_menu");

burgerBtn.addEventListener("click", () => {
  xMark.style.display = "block";
  burgerBtn.style.display = "none";
  mobileMenu.style.left = "0";
});

xMark.addEventListener("click", () => {
  burgerBtn.style.display = "block";
  xMark.style.display = "none";
  mobileMenu.style.left = "-100%";
});
