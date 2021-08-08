const searchButton=document.getElementById('search-button');
const mealList=document.getElementById('meal');
const CountryList=document.getElementById('country');
searchButton.addEventListener('click', getMeallist)
function getMeallist (){
    let searchtxt=document.getElementById("search-input").value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchtxt}` )
    .then (response=>response.json())
    .then(data => {
      let z =" ";
      if(data.meals){
          data.meals.forEach(meal => {
              z +=  ` 
              <div class="meal-box" data-id ="${meal.idMeal}">
              <div class="meal-img">
                   <img src="${meal.strMealThumb}" alt="food">
              </div>
                   <div class="meal-name">
                      <h2>${meal.strMeal}</h2>
                      <a href="#"class="recipe-button">Get Recipe</a>
                  </div>
             
              
          </div>
              `;
              
              
          });
    
      }else{
          z="sorry,we didn't find your food";
          mealList.classList.add('notfound');
      }
      mealList.innerHTML = z;
    });
}
CountryList.addEventListener('onchange',getSelectvalue())
function getSelectvalue (){
    let select = document.getElementById("country").value;
   
    fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=${select}`)
    .then (response=>response.json())
    .then(data => {

        let x ="";
        data.meals.forEach(country => {
            country=
            `<div id = "country">
            <select class="Area" >
                <option value="${strArea}">Choose Area</option>
               
            </select>
        </div>`
            
            

           
        })

      CountryList.innerHTML = x;



});
}