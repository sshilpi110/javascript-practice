

let data ;
async function getData() {
    try {
        let res = await fetch(`https://fakestoreapi.com/products`)

         data = await res.json()
        console.log("data:", data);
        appendData(data)
    }
    catch (err) {
        console.log(error)
    }
}
getData();

function appendData(data) {
    document.getElementById("container").innerText = null;
    data.forEach((el) => {
        div = document.createElement("div")

        let img = document.createElement("img")
        img.src = el.image;

        let price = document.createElement("p")
        price.innerText = el.price;

        let cat = document.createElement("p")
        cat.innerText = el.category;


        let title = document.createElement("p")
        title.innerText = el.title;

        div.append(img, price, cat, title)
        document.getElementById("container").append(div)
    })
}

function sortLH(){
    data= data.sort((a,b)=>{
        return a.price-b.price ;
    })
    appendData(data)
};

function sortHL(){
    data=data.sort((a,b)=>{
        return b.price-a.price
    })
    appendData(data)
};

function filter(){
    let query= document.querySelector("#query").value 
    
     let filtered=data.filter((el)=>{
        return el.category == query
    }) 

    appendData(filtered)
    console.log(filtered)
}