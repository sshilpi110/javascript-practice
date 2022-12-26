

let h2=document.getElementById("timer");
let count=0;
function counter(){
    count=count+1;
    h2.innerText=count;

};



      var id=setInterval(counter,2000)
    //   clearInterval(id)