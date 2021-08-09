const app = document.getElementsByClassName("recipe");
const RecipeName = document.getElementsByClassName("recipe name");
const Category = document.getElementsByClassName("Category");
const image = document.getElementsByClassName("image");
const description = document.getElementsByClassName("recipe description");
const recipeN = document.getElementsByClassName("recipeN");
const p = document.getElementsByTagName("p");


fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s= `)
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
          let dat = data.meals;
          for (element of dat) {
          
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