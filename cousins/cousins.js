const mealContainer = document.getElementById("meal");
const errorContainer = document.getElementById("error-message");
let searchContainer = document.getElementById("search-meal");
let country = localStorage.getItem(0);
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
let mealsArray = [];
const backBtn=document.getElementsByClassName("back-Btn")[0]
backBtn.addEventListener("click",()=>{
  location.href="../Main/main.html"
  
})
const reloadBtn=document.getElementsByClassName("reload-Search")[0]
reloadBtn.addEventListener("click",()=>{
  location.reload()})
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
  .then((data) => data.json())
  .then((Response) => {
    mealsArray = Response.meals;
    renderMeals(mealsArray, mealContainer);
    return mealsArray;
  })
  .then((meals) => {
    searchBtn.addEventListener("click", function (e) {
      removeChildren(searchContainer);
      mealContainer.style.display = "none";
      const inputValue = searchInput.value;
      const dataFilter = meals.filter((meal) =>
        meal.strMeal.toUpperCase().includes(inputValue.toUpperCase())
      );
      renderMeals(dataFilter, searchContainer);
      searchInput.value = "";
    });
    
      
    
  });

function renderMeals(array, container) {
  for (i = 0; i <= array.length - 1; i++) {
    // create div
    const mealBox = document.createElement("div");
    mealBox.setAttribute("class", "meal-box");
    container.appendChild(mealBox);

    // create imgContainer in the div
    const imgContainer = document.createElement("div");
    imgContainer.setAttribute("class", "meal-img");
    mealBox.appendChild(imgContainer);

    // create img element in the div
    const mealimage = document.createElement("img");
    mealimage.src = array[i].strMealThumb;
    mealimage.setAttribute("class","meal-img")
    mealBox.appendChild(mealimage);

    // create div in the div
    const mealName = document.createElement("div");
    mealName.setAttribute("class", "meal-name");
    mealBox.appendChild(mealName);

    // create h2 in the div
    const mealHeader = document.createElement("h2");
    mealHeader.textContent = array[i].strMeal;
    mealBox.appendChild(mealHeader);

    // create button in the div
    const mealbutton = document.createElement("button");
    mealbutton.setAttribute("class", "recipe-button");
    mealbutton.textContent = "Get Recipe";
    mealbutton.addEventListener("click", function (e) {
      localStorage.setItem("1", mealbutton.previousElementSibling.value);
      location.href = "../recipe/recipe.html";
    });

    mealBox.appendChild(mealbutton);
  }
}

function removeChildren(container) {
  [...container.children].forEach((child) => child.remove());
}
