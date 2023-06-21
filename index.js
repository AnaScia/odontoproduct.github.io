let rowProduct = document.querySelector(".cart__items");

// lista de todos los productos
const productsList = document.querySelector(".section__container");

//variable de arreglos de productos
let allProducts = [];

const valorTotal = document.querySelector(".total__pay");
const countProducts = document.querySelector("#contador-productos");

productsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("item__button")) {
    //si hago click en el boton "agregar carrito" quiero que haga lo siguiente..

    const product = e.target.parentElement; //solo cuando haga click en añadir carrito va a agregarse..me devuelve el nodo padre

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

    sessionStorage.setItem("infoProduct", JSON.stringify(allProducts));
  }
});
