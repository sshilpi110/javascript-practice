let h2=document.getElementById("game")

let count=8;

function counter(){
   let inp=document.getElementById("text").value
   count=count-1
   h2.innerText=count;
   if(inp==="21 din me paisa double"){
    alert("winner")
   }
   if(count===0){
    clearInterval(id)
   }

}

var id=setInterval(counter,2000)

