//START of Main page first meals display
const countryDiv = document.querySelector("#country-div");
fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
  .then((response) => response.json())
  .then((meals) => showCountries(meals.meals));

showCountries = (meals) => {
  const mealsDiv = document.querySelector("#meal-div");

  meals.forEach((meals) => {

    //to take the info we want from the api
    const countrycuisine = document.createElement("div"); //create div in the html file
    mealsDiv.appendChild(countrycuisine); //make the div a child of the div in the html file

    // countryName
    const countryName = document.createElement("h1"); //create h1 element in the html file
    countryName.innerText = meals.strArea + " Cusisine"; // assign inner text with the info from the api
    countryName.id = "countryName"; //assign an id to it
    countrycuisine.appendChild(countryName); //make the h1 a child of the div

    // recipeBtn
    const recipesBtn = document.createElement("button"); //create button element in the html file
    recipesBtn.innerText = "Get Recipes"; //assign text to it
    recipesBtn.id = "GetRecipesBtn"; //assign an id to it
    countrycuisine.appendChild(recipesBtn); //make the button a child of the div

        recipesBtn.addEventListener("click", function (e) {
        console.log(recipesBtn.previousElementSibling.innerText);
        localStorage.setItem("0",recipesBtn.previousElementSibling.innerText);
        location.href ="../recipe/recipe.html";

      });
    });
};

//END of Main page first meals display
