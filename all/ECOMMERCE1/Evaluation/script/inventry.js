

let productData=JSON.parse(localStorage.getItem("products")) || []

productData.forEach((el,i)=>{

    let card=document.createElement("div");

    let img=document.createElement("img")
    img.src=el.image

    let type=document.createElement("p")
    type.innerText=el.type;

    let desc=document.createElement("p")
    desc.innerText=el.desc;

    let price=document.createElement("p")
    price.innerText=el.price;
    
    let rmBtn=document.createElement("button")
    rmBtn.innerText="REMOVE"
    rmBtn.setAttribute("id","remove_product")

    rmBtn.addEventListener("click",()=>{
        productData.splice(i,1)
        localStorage.setItem("products",JSON.stringify(productData)) 
        window.location.reload() 
    })

    card.append(img,type,desc,price,rmBtn)
    document.getElementById("all-products").append(card)
})

