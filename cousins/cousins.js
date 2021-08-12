const mealContainer = document.getElementById("meal");
const searchContainer = document.getElementById("search-meal");
const errorContainer = document.getElementById("error-message");
let country = localStorage.getItem(0);
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
let mealsArray = [];
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
  .then((data) => data.json())
  .then((Response) => {
    mealsArray = Response.meals;

    for (i = 0; i <= mealsArray.length - 1; i++) {
      // create div
      const mealBox = document.createElement("div");
      mealBox.setAttribute("class", "meal-box");
      mealContainer.appendChild(mealBox);

      // create imgContainer in the div
      const imgContainer = document.createElement("div");
      imgContainer.setAttribute("class", "meal-img");
      mealBox.appendChild(imgContainer);

      // create img element in the div
      const mealimage = document.createElement("img");
      mealimage.src = mealsArray[i].strMealThumb;
      mealBox.appendChild(mealimage);

      // create div in the div
      const mealName = document.createElement("div");
      mealName.setAttribute("class", "meal-name");
      mealBox.appendChild(mealName);

      // create h2 in the div
      const mealHeader = document.createElement("h2");
      mealHeader.textContent = mealsArray[i].strMeal;
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
  })
  .then((response) => {
    searchBtn.addEventListener("click", function (e) {
      const inputValue = searchInput.value;
      for (let i = 0; i < mealsArray.length; i++) {

        if (mealsArray[i].strMeal.includes(inputValue)) {

          console.log(mealsArray[i].strMeal);
          mealContainer.style.display = "none"; //make meal container invisible
          
          // create div
          const mealBox = document.createElement("div");
          mealBox.setAttribute("class", "meal-box");
          searchContainer.appendChild(mealBox);

          // create imgContainer in the div
          const imgContainer = document.createElement("div");
          imgContainer.setAttribute("class", "meal-img");
          searchContainer.appendChild(imgContainer);

          // create img element in the div
          const mealimage = document.createElement("img");
          mealimage.src = mealsArray[i].strMealThumb;
          searchContainer.appendChild(mealimage);

          // create div in the div
          const mealName = document.createElement("div");
          mealName.setAttribute("class", "meal-name");
          searchContainer.appendChild(mealName);

          // create h2 in the div
          const mealHeader = document.createElement("h2");
          mealHeader.textContent = mealsArray[i].strMeal;
          searchContainer.appendChild(mealHeader);

          // create button in the div
          const mealbutton = document.createElement("button");
          mealbutton.setAttribute("class", "recipe-button");
          mealbutton.textContent = "Get Recipe";
          mealbutton.addEventListener("click", function (e) {
            localStorage.setItem("1", mealbutton.previousElementSibling.value);
            location.href = "../recipe/recipe.html";
          });
          searchContainer.appendChild(mealbutton);
        }

        else{
          mealContainer.style.display = "none";
          // searchContainer.style.display = "none";
          // const errorMessage = document.createElement("h2");
          // errorMessage.textContent = "no results with your input";
          // console.log(errorMessage)
          // errorContainer.appendChild(errorMessage);

        }
      }
    });
  });
