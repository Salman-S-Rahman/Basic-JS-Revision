const loadUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

function displayUser(data) {
  console.log(data);
  const ul = document.getElementById("user-list");
  for (const user of data) {
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
