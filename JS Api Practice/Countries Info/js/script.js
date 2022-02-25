const loadCountries = () => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const countriesDiv = document.getElementById("countries");
  countries.forEach((country) => {
    console.log(country);
    const div = document.createElement("div");
    div.classList.add("country-all");
    div.classList.add("col");
    div.innerHTML = `
         <div>
            <div class="d-flex justify-content-start">
                  <img src=${country.flag} alt="">
                  <h6>${country.name}</h6>
            </div>
            <div>
                  <h6>Capital: ${country.capital}</h6>
                  <h6>Population: ${country.population}</h6>
                  <h6>Region: ${country.region}</h6>
                  <h6>Time Zone: ${country.timezones[0]} </h6>
            </div>
      </div>
    `;

    countriesDiv.appendChild(div);
  });
};

// ============= all country ============

const loadEuCountries = () => {
  fetch("https://restcountries.com/v2/regionalbloc/eu")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

loadEuCountries();
