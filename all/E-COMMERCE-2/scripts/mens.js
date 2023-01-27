
var mensData = [
   
    {
        image_url:
            "https://content.shop4reebok.com/static/Product-EX4285/reebok_EX4285_1.jpg.plp ",
        name: "MEN'S REEBOK RUNNING GENESIS RUNNER SHOES  ",
        price: 1620,
        strikedoffprice: 3599,
    },
   
    {
        image_url:
            "https://content.shop4reebok.com/static/Product-HG5456/reebok_HG5456_1.jpg.plp",
        name: "MEN'S REEBOK FITNESS TRAINING  SWEATSHIRT",
        price: 1079,
        strikedoffprice: 1799,
    },
    {
        image_url:
            "https://content.shop4reebok.com/static/Product-EX4285/reebok_EX4285_1.jpg.plp ",
        name: "MEN'S REEBOK RUNNING GENESIS RUNNER SHOES  ",
        price: 1620,
        strikedoffprice: 3599,
    },
   
    {
        image_url:
            "https://content.shop4reebok.com/static/Product-HG5456/reebok_HG5456_1.jpg.plp",
        name: "MEN'S REEBOK FITNESS TRAINING  SWEATSHIRT",
        price: 1079,
        strikedoffprice: 1799,
    }, {
        image_url:
            "https://content.shop4reebok.com/static/Product-EX4285/reebok_EX4285_1.jpg.plp ",
        name: "MEN'S REEBOK RUNNING GENESIS RUNNER SHOES  ",
        price: 1620,
        strikedoffprice: 3599,
    },
   
    {
        image_url:
            "https://content.shop4reebok.com/static/Product-HG5456/reebok_HG5456_1.jpg.plp",
        name: "MEN'S REEBOK FITNESS TRAINING  SWEATSHIRT",
        price: 1079,
        strikedoffprice: 1799,
    },
];


localStorage.setItem("menData", JSON.stringify(mensData))
var cartArray = JSON.parse(localStorage.getItem("cartDetails")) || [];

display(mensData)
function display(mensData) {
    document.getElementById("display").innerHTML=null;
    mensData.map(function (el) {
        var box1 = document.createElement("div")
        var img = document.createElement("img");
        img.setAttribute("src", el.image_url);

        var name = document.createElement("h3");
        name.innerText = el.name;

        var price = document.createElement("h3")
        price.innerText = el.price;

        var cart = document.createElement("button")
        cart.innerText = "Add to cart";
        cart.addEventListener("click", function () {
            alert("Added to cart");
            el.qty = 1;
            cartArray.push(el);
            localStorage.setItem("cartDetails".JSON.stringify(cartArray))
        })

        var wish = document.createElement("button");
        wish.innerText = "4.0 *"
        wish.setAttribute("id", "rate")
        box1.append(img, name, price, cart, wish);
        document.querySelector("#display").append(box1)
    })
    function sortHL(){
        mensData=mensData.sort(function(a,b){
            return b.price-a.price;
        })
          display(mensData)
    }

   
}
