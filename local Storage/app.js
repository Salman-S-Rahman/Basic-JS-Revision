const displayLocalStorageCart = () =>{
  const cart = getCart();
   for(const productName in cart){
     displayProducts(productName)  
  }
}



const addItem = () => {
  const productInput = document.getElementById("product-input");
  const productName = productInput.value;

  //   ==== display products =====
  displayProducts(productName);

  //   ==== add to local storage ===
  addToLocalStorage(productName);

  productInput.value = "";
};

const displayProducts = (productName) => {
  const productContainer = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = productName;
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

const addToLocalStorage = (productName) => {
  const cart = getCart();
  cart[productName] = 1;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};


displayLocalStorageCart()

