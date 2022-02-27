const searchField = document.getElementById("search-field");
const searchValue = searchField.value;

const loadDrinks = () => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDrinks(data.drinks));
};

const displayDrinks = (drinks) => {
  const singleDrink = document.getElementById("single-drink");
  drinks.forEach((drink) => {
    console.log(drink);
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card" onClick="displayMeal(${drink.idDrink})">
             <img src=${drink.strDrinkThumb} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title text-center">${drink.strGlass}</h5>
            </div>
      </div> 
    `;
    singleDrink.appendChild(div);
  });
};

// ====== single all drink card shown =====
