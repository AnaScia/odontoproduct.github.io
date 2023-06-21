let rowProduct = document.querySelector(".cart__items");
const valorTotal = document.querySelector(".total__pay");
const countProducts = document.querySelector("#contador-productos");

let allProducts = JSON.parse(sessionStorage.getItem("infoProduct"));
console.log(allProducts);

const showHTML = () => {
  if (allProducts) {
    rowProduct.innerHTML = "";

    let total = 0;
    let productsTotal = 0;

    allProducts.forEach((product) => {
      const containerProduct = document.createElement("div"); //creamos el div
      containerProduct.classList.add("item"); // y le agregamos la clase

      containerProduct.innerHTML = `  <div class="cart__item">
    <div class="cart__item-details">
    <div class="selector-cant">${product.quantity}</div>
      <span class="cart__item-title">${product.title}</span>
      <div class="cart__price">${product.price}</div>
      <img src="./img/basket.png" class="cart__remove" />
      </div>
      </div>
    `;

      rowProduct.append(containerProduct);

      total = total + parseInt(product.quantity * product.price.slice(1)); //le sacamos el signo de peso con slice
      productsTotal = productsTotal + product.quantity;
    });

    //Agregamos el html donde dice el total:
    countProducts.innerText = `En el carrito hay ${productsTotal} producto/s agregados`;
    valorTotal.innerText = `Su total es: $${total}`;
  }
};

rowProduct.addEventListener("click", (e) => {
  if (e.target.classList.contains("cart__remove")) {
    //solo se elimina si se hace click en icono de eliminar
    const product = e.target.parentElement; //obtenemos toda la tarjeta producto
    const title = product.querySelector("span").textContent;

    allProducts = allProducts.filter((product) => product.title !== title);
    console.log(allProducts);

    showHTML();
  }
});

showHTML();
