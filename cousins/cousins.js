const mealContainer = document.getElementById("meal");
let country = localStorage.getItem(0);

fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
  .then((data) => data.json())
  .then((Response) => {
    const mealsArray = Response.meals;

    for (i = 0; i <= mealsArray.length - 1; i++) {
      const mealBox = document.createElement("div");
      mealBox.setAttribute("class", "meal-box");
      mealContainer.appendChild(mealBox);
      const imgContainer = document.createElement("div");
      imgContainer.setAttribute("class", "meal-img");
      mealBox.appendChild(imgContainer);
      const mealimage = document.createElement("img");

      mealimage.src = mealsArray[i].strMealThumb;
      mealBox.appendChild(mealimage);
      const mealName = document.createElement("div");
      mealName.setAttribute("class", "meal-name");
      mealBox.appendChild(mealName);
      const mealHeader = document.createElement("h2");
      mealHeader.textContent = mealsArray[i].strMeal;
      mealBox.appendChild(mealHeader);
      const mealbutton = document.createElement("button");
      mealbutton.setAttribute("class", "recipe-button");
      mealbutton.textContent = "Get Recipe";
      mealbutton.addEventListener("click", function (e) {
        localStorage.setItem("1", mealbutton.previousElementSibling.value);
        location.href = "../recipe/recipe.html";
      });

      mealBox.appendChild(mealbutton);
    }
  });
