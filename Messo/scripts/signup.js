

let Arr=JSON.parse(localStorage.getItem("signup")) || [];
let form =document.getElementById("form");

form.addEventListener("submit",signupFun);

function signupFun(event){
   event.preventDefault();

   let data={
    name:form.name.value,
    email:form.email.value,
    password:form.password.value
   }

   if(checkEmail(data.email===true)){
    Arr.push(data);
    localStorage.setItem("signup" ,JSON.stringify(Arr))
    alert("signup successful")
   }
   else{
    alert ("Account already exist");
   }

   function checkEmail(email){
    let filtered=Arr.filter(function(el){
        return email===email.el;
    })
    if(filtered.length>0){
        return false ;
    }
    else{
        return true;
    }
}
window.location.href="login.html"
}



