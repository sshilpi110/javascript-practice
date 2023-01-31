

function addProduct(n,c,u,p,g,s){
    this.name=n,
    this.category=c,
    this.url=u,
    this.price=p,
    this.gender=g,
    this.sold=s

};


document.querySelector("form").addEventListener("submit" ,addFun)

function addFun(event){
    event.preventDefault() ;

    let name= document.querySelector("#name").value
    let cat= document.querySelector("#category").value 
    let url= document.querySelector("#image").value
    let price= document.querySelector("#price").value
    let gen= document.querySelector("#gender").value
    let sold= document.querySelector("#sold").value

    let collect= new addProduct(name,cat,url,price,gen,sold) ;

    productData= JSON.parse(localStorage.getItem("products")) || []

    productData.push(collect)

    localStorage.setItem("products" ,JSON.stringify(productData))
    alert ("Item added successfully")
}