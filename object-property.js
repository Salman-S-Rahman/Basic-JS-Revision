const product = {
  id: 1,
  title: "Smartphone",
  brand: "Samsung",
  price: 20000,
};
console.log(product);
const productPrice = "price";

// ====== object value can be passed in three way =====
console.log(product.brand);
console.log(product["title"]);
product[productPrice] = 40000;
console.log(product[productPrice]);
