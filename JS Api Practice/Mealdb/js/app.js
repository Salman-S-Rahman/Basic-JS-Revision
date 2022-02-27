const spinner = document.getElementById("spinner");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");

const searchField = document.getElementById("search-field");

const singleMeal = document.getElementById("single-Meal");

const mealDetails = document.getElementById("meal-details");

const loadMeals = () => {
  const searchValue = searchField.value;
  if (searchValue == "") {
    error1.style.display = "block";
    singleMeal.textContent = "";
    mealDetails.textContent = "";
  } else {
    error1.style.display = "none";
    spinner.style.display = "block";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => displayMeals(data.meals));
  }

  const displayMeals = (meals) => {
    if (meals) {
      error2.innerText = "";
      const singleMeal = document.getElementById("single-Meal");
      singleMeal.textContent = "";
      const mealDetails = document.getElementById("meal-details");
      mealDetails.textContent = "";
      meals.forEach((meal) => {
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
      <div class="card" onClick="displayMeal(${meal.idMeal})">
             <img src=${meal.strMealThumb} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title text-center">${meal.strMeal}</h5>
            </div>
      </div> 
    `;
        singleMeal.appendChild(div);
        spinner.style.display = "none";
      });
    } else {
      error2.innerText = `No meal found for "${searchField.value}" search result !`;
      spinner.style.display = "none";
      singleMeal.textContent = "";
      mealDetails.textContent = "";
    }
    searchField.value = "";
  };
};

// ===== single meals shown =====

const displayMeal = (mealId) => {
  spinner.style.display = "block";
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals));
};

const displayMealDetails = (meals) => {
  const mealDetails = document.getElementById("meal-details");
  mealDetails.textContent = "";
  meals.forEach((meal) => {
    const div = document.createElement("div");
    div.innerHTML = `
              <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="..."    style="height:400px">
               <div class="card-body text-left">
                          <h3 class="card-title">${meal.strMeal}</h3>
                          <h4>Ingredients</h4>
                          <div id="ingredients">
                          </div>
               </div>

               <div class="card-footer text-center">
                  <small class="text-muted">${meal.strCategory}</small>
               </div>
              `;
    mealDetails.appendChild(div);
    const mealIngredients = document.getElementById("ingredients");

    for (var i = 1; i <= 20; i++) {
      if (meal["strIngredient" + i]) {
        const ingredient = document.createElement("p");
        ingredient.innerText = `${meal["strMeasure" + i]} ${
          meal["strIngredient" + i]
        } `;
        mealIngredients.appendChild(ingredient);
      }
    }

    for (let i = 1; i <= 20; i++) {
      if (meal["strIngredient" + i]) {
        const ingredient = document.createElement("p");
        ingredient.innerText = `${meal["strMeasure" + i]} ${
          meal["strIngredient" + i]
        }`;
        mealIngredients.appendChild(ingredient);
      }
    }
  });
  spinner.style.display = "none";
};

// ====== meal details =======
