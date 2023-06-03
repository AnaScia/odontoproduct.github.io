// let navList = document.querySelector(".nav__list");
// let toggle = document.querySelector(".nav__toggle");
// let links = document.querySelector(".links");

// toggle.addEventListener("click", () => {
//   // al hacer click en la flecha..
//   toggle.classList.toggle("rotate"); //la flecha rota hacia arriba
//   links.classList.toggle("active"); //la lista aparece
// });

let rowProduct = document.querySelector(".cart__items");

// lista de todos los productos
const productsList = document.querySelector(".section__container");

//variable de arreglos de productos

let allProducts = [];

const valorTotal = document.querySelector(".total__pay");
const countProducts = document.querySelector("#contador-productos");

productsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("item__button")) {
    //si hago click en el boton quiero que haga lo siguiente..

    const product = e.target.parentElement; //me devuelve el nodo padre

    //creamos un objeto con la cantidad,titulo y precio
    const infoProduct = {
      quantity: 1,
      title: product.querySelector(".item__title").textContent, //con textContent extraemos el contenido del div
      price: product.querySelector(".item__price").textContent,
    };
    console.log(infoProduct);

    //Vamos agregando productos al carrito,some recorre todos los productos y se fija si ya existe y devuelve true o false
    const exits = allProducts.some(
      (product) => product.title === infoProduct.title
    );
    //si el titulo es igual agrega mas producto y va subiendo el numero de la cantidad
    if (exits) {
      const products = allProducts.map((product) => {
        if (product.title === infoProduct.title) {
          product.quantity++; //si existe solo lo suma al producto existente
          return product;
        } else {
          //si no existe agrega el producto
          return product;
        }
      });

      allProducts = [...products];
    } else {
      allProducts = [...allProducts, infoProduct]; //con el operador ... esparcimos la info en el nuevo arreglo..combinamos dos arrays
    }

    showHTML();
  }
});

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

//funcion para mostrar html
const showHTML = () => {
  //limpiamos primero html  para que no se sobreescriba
  rowProduct.innerHTML = "";

  let total = 0;
  let totalOfProducts = 0;

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
    totalOfProducts = totalOfProducts + product.quantity;
  });

  //Agregamos el html donde dice el total:
  countProducts.innerText = `En el carrito hay ${totalOfProducts} productos agregados`;
  valorTotal.innerText = `Su total es: $${total}`;
};
