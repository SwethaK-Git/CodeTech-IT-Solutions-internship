let total = 0;

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

function addToCart(item, price) {
  const cartItems = document.getElementById("cartItems");

  const li = document.createElement("li");
  li.textContent = item + " - ₹" + price;
  cartItems.appendChild(li);

  total += price;
  document.getElementById("total").textContent = total;
}