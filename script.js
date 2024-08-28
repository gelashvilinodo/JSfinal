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

// recipes cards

const recipeContainer = document.getElementById("recipeCardContainer");

const getRecipes = async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  const result = await response.json();
  return result.recipes;
};

const createCards = async () => {
  const recipes = await getRecipes();
  for (let recipe of recipes) {
    // console.log(recipe);
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("recipe_card");
    recipeContainer.appendChild(cardDiv);
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("recipe_image_div");
    const recipeImage = document.createElement("img");
    recipeImage.classList.add("recipe_image");
    imageDiv.appendChild(recipeImage);
    cardDiv.appendChild(imageDiv);
    recipeImage.src = recipe.image;
    // hard part
    const recipeTexts = document.createElement("div");
    cardDiv.appendChild(recipeTexts);
    recipeTexts.classList.add("recipe_text_div");
    const recipeTitle = document.createElement("h4");
    recipeTexts.appendChild(recipeTitle);
    recipeTitle.classList.add("recipe_name");
    recipeTitle.textContent = recipe.name;
    const recipeCategory = document.createElement("h2");
    recipeTexts.appendChild(recipeCategory);
    recipeCategory.classList.add("recipe_category");
    recipeCategory.textContent = `${"cuisine: " + recipe.cuisine}`;
    const ingredientsButton = document.createElement("button");
    ingredientsButton.classList.add("ingr_btn");
    recipeTexts.appendChild(ingredientsButton);
    ingredientsButton.textContent = "ingredients:";
    const ingredientsdDiv = document.createElement("div");
    ingredientsdDiv.classList.add("ingredients_div");
    recipeTexts.appendChild(ingredientsdDiv);
    for (let ingredient of recipe.ingredients) {
      const ingredients = document.createElement("p");
      ingredients.classList.add("ingredients_p");
      ingredientsdDiv.appendChild(ingredients);
      ingredients.textContent = "- " + ingredient;
    }
    ingredientsButton.addEventListener("click", () => {
      ingredientsdDiv.classList.toggle("visible_ingredients");
    });
  }
};
createCards();
