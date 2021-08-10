const app = document.getElementsByClassName("recipe")[0];
const RecipeName = document.getElementsByClassName("recipe name")[0];
const Category = document.getElementsByClassName("Category")[0];
const image = document.getElementsByClassName("image")[0];
const description = document.getElementsByClassName("recipe description")[0];
const recipeN = document.getElementsByClassName("recipeN")[0];
const p = document.getElementsByTagName("p")[0];

fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52977 ")
  .then((response) => {
    if (response.status !== 200) {
      console.log(
        `Looks like there was a problem. Status Code: ${response.status}`
      );
    } else {
      return response.json();
    }
  })
  .then((data) => {
    let meal = data.meals;
    console.log(meal);
    for (element of meal) {
      RecipeName.textContent = element.strMeal;

      Category.textContent = element.strTags;

      image.src = element.strMealThumb;

      recipeN.textContent = element.strMeal;

      p.textContent = element.strInstructions;
    }
  });
