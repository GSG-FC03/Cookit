fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
.then((response) => response.json())
    .then(data => {
        const meals= data.meals;
        // console.log(meals);

        for (let i=0; i<=meals.length; i++){
            console.log(meals[i].strArea);
            if(meals[i].strArea){
            let opt = document.createElement('option');
            opt.value = meals[i].strArea;
            opt.textContent =meals[i].strArea;

            selectArea.appendChild(opt);
            }
        }
        })