const products = [
  { name: "Laptop", price: 3200, brand: "Lenevo", color: "Silver" },
  { name: "Phone", price: 2200, brand: "Samsung", color: "Black" },
  { name: "Laptop", price: 1000, brand: "Dell", color: "Red" },
  { name: "Camera", price: 800, brand: "HP", color: "Blue" },
  { name: "Phone", price: 1700, brand: "Oppo", color: "Pink" },
  { name: "Camera", price: 1100, brand: "Casio", color: "Moon Light" },
];
// 1-map
const productName = products.map((product) => product.name);
// console.log(productName);

const productBrand = products.map((product) => product.brand);
// console.log(productBrand);

// ======== map only apply for array or, for array objects . Map always return something in a new array. ==========

// 2-forEach
// products.forEach((product) => console.log(product.color));
// products.forEach((product) => console.log(product.brand));

// ======== forEach only apply for array or, for array objects . forEach doesn't return anything & can use instantly. ==========

// 3-filter

const onlyLaptops = products.filter((product) => product.name === "Laptop");
console.log(onlyLaptops);

// ==== filter always return an array & can return multiple value if match the condition ===


