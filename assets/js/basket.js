const div = document.getElementById("image");

function getimage() {
  div.innerHTML = "";

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cart);
  cart.forEach((item, index) => {
    if (item) {
      const box = document.createElement("div");
      box.innerHTML = `
        <p>${item.name}</p>
        <img src="${item.avatar}" alt="Avatar">
        
        <button onclick="removeItem(${index})">Remove from cart</button>
      `;
      div.appendChild(box);
    }
  });

}






function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  getimage();
}

  getimage();

