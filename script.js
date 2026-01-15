const products = [
  { name: "Product One", price: 10 },
  { name: "Product Two", price: 15 },
  { name: "Product Three", price: 20 }
];

const shop = document.querySelector(".shop");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";

  div.innerHTML = `
    <h2>${product.name}</h2>
    <p>$${product.price}</p>
    <button>Add to Cart</button>
  `;

  shop.appendChild(div);
});
