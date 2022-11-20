
//we are using constructor function
function addProduct(n,c,u,p,g,s){
    this.name=n
    this.category=c
    this.url=u
    this.price=p
    this.gender=g
    this.sold=s
}

document.getElementById("frm").addEventListener("submit",myFunc)

function myFunc(event){
event.preventDefault()

let name=document.getElementById("name").Value
let cat=document.getElementById("category").value
let url=document.getElementById("image").value
let price=document.getElementById("price").value
let gen=document.getElementById("gender").value
let sold=document.getElementById("sold").value

let collectAll=new addProduct(name,cat,url,price,gen,sold)

productData=JSON.parse(localStorage.getItem("product")) || []

productData.push(collectAll)
localStorage.setItem("product",JSON.stringify(productData))

alert("Item added successfully")
}
