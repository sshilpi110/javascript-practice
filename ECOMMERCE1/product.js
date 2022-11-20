productData=JSON.parse(localStorage.getItem("product")) || []

let count=document.getElementById("counter").innerText="Total no .ofProducts"+productData.length;
productData.forEach((el,productIndex)=>{
    let card =document.createElement("div")
    let image=document.createElement("img")
    image.src=el.url;
    let name=document.createElement("p")
    name.innerText=el.name;
    let price=document.createElement("p")
    price.innerText=el.price;

    let rmBtn=document.createElement("button")
    rmBtn.innerText="REMOVE"
    rmBtn.setAttribute("id","remove")
    let soldBtn=document.createElement("button")
    soldBtn.setAttribute("id","sold")

    if(el.sold){
        soldBtn.innerText="soldOut";
        soldBtn.style.backgroundColor="red"
    }
    else{
        soldBtn.innerText="In Stock"
        soldBtn.style.backgroundColor="green"
    }
    card.append(image,name,price,rmBtn,soldBtn)

    rmBtn.addEventListener("click",()=>{
        productData.splice(productIndex,1)
        localStorage.setItem("products",JSON.stringify(productData))
        window.location.reload();
    })

    soldBtn.addEventListener("click",()=>{
        if(el.sold){
            el.sold=false;

        }
        else{
            el.sold=true;
        }

        localStorage.setItem("products",JSON.stringify(productData));
        window.location.reload();
    })

 document.getElementById("container").append(card)

})
