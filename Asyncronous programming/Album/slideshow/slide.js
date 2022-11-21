function storeImage(){
    let url=document.getElementById("image").value

    let collect=JSON.parse(localStorage.getItem("images")) || []
    collect.push(url)
    localStorage.setItem("images",JSON.stringify(collect))
    alert("Image added successfully")
}