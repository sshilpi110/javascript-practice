

    productData= JSON.parse(localStorage.getItem("products")) || []

    let count=document.getElementById("counter").innerText= "Total  product"+productData.length ;

    productData.forEach((el,i)=>{

        let card= document.createElement("div")
         
        let image= document.createElement("img")
        image.src=el.url ;
         
        let name=  document.createElement("p")
        name.innerText=el.name ;

        let price= document.createElement("p")
        price.innerText =el.price ;


        let rmvBtn= document.createElement("button")
        rmvBtn.innerText="REMOVE"
        rmvBtn.setAttribute("id" ,"remove")
        rmvBtn.addEventListener("click" ,()=>{
            productData.splice(i,1);
            localStorage.setItem("products" ,JSON.stringify(productData))
            window.location.reload();
        });

        let soldBtn= document.createElement("button")
        soldBtn.setAttribute("id" ,"sold")
        if(el.sold){
            soldBtn.innerText="soldOut"
            soldBtn.style.backgroundColor="red"
        }else{
            soldBtn.innerText="In stoke"
            soldBtn.style.backgroundColor="green"
        }

        card.append(image,name,price,rmvBtn,soldBtn)
        soldBtn.addEventListener("click" ,()=>{
            if(el.sold){
                el.sold= false
            }else{
                el.sold=true ;
            }

            localStorage.setItem("products" ,JSON.stringify(productData))
        })
        document.getElementById("container").append(card)

    })

