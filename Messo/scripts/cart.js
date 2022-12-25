

let cartProduct = document.getElementById("cartProduct");
let cartLs = JSON.parse(localStorage.getItem("cart-page")) || [];

function displayProduct(productData) {
let cartProduct = document.getElementById("cartProduct");
    screen.innerHtml = "";
    productData.forEach(function (el) {
        let div = document.createElement("div");

        let img = document.createElement("img")
        img.setAttribute("src", el.img);

        let brand = document.createElement("h3");
        brand.innerText = el.brand;

        let name = document.createElement("h3")
        name.innerText = el.name;


        let price = document.createElement("h3")
        price.innerText = el.price;

        
        let catagory = document.createElement("h3")
        catagory.innerText = el.catagory;

        let cart = document.createElement("button");
        cart.innerText = "Delete";
        // cart.setAttribute("class", "delete")
        cart.addEventListener("click", function () {
            deleteFun(el.productID)

        })

        div.append(img, brand, name, price, catagory, cart);
        cartProduct.append(div)
    })
}
displayProduct(cartLs);

function deleteFun(id) {
    console.log(id)
    let deleted = cartLs.filter(function (el) {
        return el.productID != id;
    })
    cartLs = deleted;
    localStorage.setItem("cart-page", JSON.stringify(cartLs));
    displayProduct(cartLs)
    console.log(deleted)
}

