
let id;
let counter=0;
function start(){
let collect=JSON.parse(localStorage.getItem("images")) || []
 let container=document.getElementById("container")
 container.innerHTML=null;

 let image=document.createElement("img") 

 id=setInterval(function(){
if(counter===collect.length){
    counter=0;
}
image.src=collect[counter]
container.append(image)

console.log("counter:",counter)
 },3000)
   
}

function pause(){
    console.log("paused"),counter
    clearInterval(id)
}