const div = document.getElementById("image");
const btn = document.getElementById("pagi");

let page = 1;
let limit = 3;

btn.addEventListener("click", getimage);
function getimage() {
  let skip = (page - 1) * limit;
  axios
    .get(
      `https://655c2ff2ab37729791aa015f.mockapi.io/university/university?page=${page}&limit=${limit}&skip=${skip}`
    )
    .then((res) => {
      db = res.data;
      db.map((item) => {
        console.log(item);
        const box = document.createElement("div");
        box.innerHTML = `
                <p>${item.name}</p>
                <img src="${item.avatar}" alt="Avatar">
                <button onclick='addToBasket(${item.id})'>add</button>
                `;
        div.appendChild(box);
      });
      page++;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
getimage();

function addToBasket(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(db.find((item) => item.id == id));
  localStorage.setItem("cart", JSON.stringify(cart));
}
