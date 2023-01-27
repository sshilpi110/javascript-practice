
//here i am using constructor function

function addProduct(t,d,p,i){
    this.type=t
    this.description=d
    this.price=p
    this.image=i
}

document.getElementById("products").addEventListener("submit",myFunc)

function myFunc(event){
    event.preventDefault();
    let type=document.getElementById("type").value

    let desc=document.getElementById("desc").value
    let price=document.getElementById("price").value
    let image=document.getElementById("image").value

    let collectAll=new addProduct(type,desc,price,image)

    console.log(collectAll)

    let productData=JSON.parse(localStorage.getItem("products")) || []

    productData.push(collectAll)
    localStorage.setItem("products",JSON.stringify(productData))

    alert("Item successfully added")

}