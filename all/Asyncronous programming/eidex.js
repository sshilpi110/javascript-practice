let h2=document.getElementById("time")
let count=20;
function counter(){
    count=count-1
    h2.innerText=count;

    if(count===0){
        clearInterval(id)
    }
}

 var id=setInterval(counter,3000)