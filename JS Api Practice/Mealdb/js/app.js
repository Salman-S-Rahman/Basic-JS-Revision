const searchField = document.getElementById("search-field");
const searchValue = searchField.value;

const loadMeals = () => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  console.log(meals);
  meals.forEach((meal) => {
    console.log(meal);
  });
};
