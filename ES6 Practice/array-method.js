const products = [
  { name: "Laptop", price: 3200, brand: "Lenevo", color: "Silver" },
  { name: "Phone", price: 2200, brand: "Samsung", color: "Black" },
  { name: "Laptop", price: 1000, brand: "Dell", color: "Red" },
  { name: "Camera", price: 800, brand: "HP", color: "Blue" },
  { name: "Phone", price: 1700, brand: "Oppo", color: "Pink" },
  { name: "Camera", price: 1100, brand: "Casio", color: "Moon Light" },
];

const allProduct = products.map((product) => product.name);
console.log(allProduct);
