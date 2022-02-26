const searchField = document.getElementById("search-field");

const loadMeals = () => {
  const searchValue = searchField.value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  const singleMeal = document.getElementById("single-Meal");
  singleMeal.textContent = "";
  meals.forEach((meal) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
      <div class="card">
             <img src=${meal.strMealThumb} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title text-center">${meal.strMeal}</h5>
            </div>
      </div> 
    `;
    singleMeal.appendChild(div);
  });
};
