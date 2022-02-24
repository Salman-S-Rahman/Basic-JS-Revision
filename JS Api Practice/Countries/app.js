const loadCountries = () => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

loadCountries();

const displayCountries = (countries) => {
  const countriesContainer = document.getElementById("countries");
  countries.forEach((country) => {
    console.log(country);
    const div = document.createElement("div");
    div.classList.add("country");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    img.src = country.flag;
    h2.innerText = country.name;
    div.appendChild(img);
    div.appendChild(h2);

    countriesContainer.appendChild(div);
  });
};
