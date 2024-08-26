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

// dark mode toggle

const darkMode = document.getElementById("lightMode");
const header = document.getElementById("header");

let isDarkMode = localStorage.getItem("darkMode");

if (isDarkMode === "enabled") {
  document.body.classList.add("darkmode");
  header.classList.add("darkmode");
}

darkMode.addEventListener("click", () => {
  isDarkMode = localStorage.getItem("darkMode");
  if (isDarkMode === "enabled") {
    localStorage.setItem("darkMode", "disabled");
    document.body.classList.remove("darkmode");
    header.classList.remove("darkmode");
  } else {
    localStorage.setItem("darkMode", "enabled");
    document.body.classList.add("darkmode");
    header.classList.add("darkmode");
  }
});

// slider

const sliderItems = document.querySelectorAll(".slider_item");
const rightButton = document.getElementById("rightBtn");
const leftButton = document.getElementById("leftBtn");

let activeIndex = 0;

const removeShow = (index) => {
  sliderItems[index].classList.remove("show");
};

const addShow = (index) => {
  sliderItems[index].classList.add("show");
};

rightButton.addEventListener("click", () => {
  removeShow(activeIndex);
  if (activeIndex == sliderItems.length - 1) {
    activeIndex = 0;
  } else {
    activeIndex += 1;
  }
  addShow(activeIndex);
});

leftButton.addEventListener("click", () => {
  removeShow(activeIndex);
  if (activeIndex == 0) {
    activeIndex = sliderItems.length - 1;
  } else {
    activeIndex -= 1;
  }
  addShow(activeIndex);
});
