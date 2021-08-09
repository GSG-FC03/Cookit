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
            // Examine the text in the response
            return response.json();
          }
        })
        .then((data) => {
          let meal = data.meals;
          console.log(meal)
          for (element of meal) {
          
            // Create a h1 with class =recipe name  
          
            RecipeName.textContent = element.strMeal;
            // Create an h1 and set the text content to the Category of Recipe 
           
            Category.textContent = element.strTags;
  
           // Create a img and give it calss name image 
           
           image.src = element.strMealThumb;
        
           // Create a div  and give it calss recipe description ,that contain recipe name and descripe it 
         
       
         // Create a h1 that will show  recipe
         
         recipeN.textContent = element.strMeal;
         // Create a p that will include the description of recipe
        
        p.textContent = element.strInstructions;
           


           
          
        }

      })