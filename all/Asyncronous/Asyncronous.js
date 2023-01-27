

function test(){
    console.log("Hey i am here")
}
console.log(1)
console.log(2)
console.log(3)
console.log(4)

setTimeout (test,3000);
setTimeout (test,4000);

// .<.......we are doing setInterval........>



function test (){
    console.log("Hello i am here")
}

console.log(1)
console.log(2)
console.log(3)
console.log(4)

 var id= setInterval(test,2000)
 clearInterval(id)
