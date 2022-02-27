const searchField = document.getElementById("search-field");
const searchValue = searchField.value;
const spinner = document.getElementById("spinner");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");

const loadDrinks = () => {
  if (searchField.value == "") {
    error1.style.display = "block";
  } else {
    spinner.style.display = "block";
    error1.style.display = "none";
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayDrinks(data.drinks));
  }
};

const displayDrinks = (drinks) => {
  const singleDrink = document.getElementById("single-drink");
  drinks.forEach((drink) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card" onClick="displayDrink(${drink.idDrink})">
             <img src=${drink.strDrinkThumb} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title text-center">${drink.strGlass}</h5>
            </div>
      </div> 
    `;
    singleDrink.appendChild(div);
    spinner.style.display = "none";
  });
};

// ====== single all drink card shown =====

const displayDrink = (drinkId) => {
  console.log(drinkId);
  spinner.style.display = "block";
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data.drinks));
};

const displayDetails = (drinks) => {
  console.log(drinks);
  const drinkDetails = document.getElementById("drink-details");
  drinks.forEach((drink) => {
    const div = document.createElement("div");
    div.innerHTML = `
            <img src="${drink.strDrinkThumb}" class="card-img-top img-fluid" alt="..." style="height:400px">
                    <div class="card-body text-left">
                        <h3 class="card-title">${drink.strGlass}</h3>
                        <h4>Ingredients::</h4>
                        <div id="ingredients">
                        </div>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted fw-bold">${drink.strCategory}</small>
                    </div>
    `;
    drinkDetails.appendChild(div);
    const drinkIngredients = document.getElementById("ingredients");
    for (var i = 1; i <= 15; i++) {
      if (drink["strIngredient" + i]) {
        const p = document.createElement("p");
        p.innerHTML = `${drink["strIngredient" + i]} ${
          drink["strMeasure" + i]
        }`;
        drinkIngredients.appendChild(p);
      }
    }
  });
  spinner.style.display = "none";
};
