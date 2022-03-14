const displayLocalStorageProducts = () => {
  const cart = getCart();
  console.log(cart);
  for (const pn in cart) {
    displayProducts(pn);
  }
};

const addToCart = () => {
  const productInput = document.getElementById("product-input");
  const productName = productInput.value;
  if (!productName) {
    return;
  }
  // ==== display products ====
  displayProducts(productName);

  // ===== add to local storage ====

  addToLocalStorage(productName);

  productInput.value = "";
};

const displayProducts = (name) => {
  const productContainer = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = name;
  productContainer.appendChild(li);
};

const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};

const addToLocalStorage = (pn) => {
  const cart = getCart();
  if (cart[pn]) {
    cart[pn] = cart[pn] + 1;
  } else {
    cart[pn] = 1;
  }

  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

displayLocalStorageProducts();
