

document.querySelector("form").addEventListener("submit", mySignIn);

let signUpArr = JSON.parse(localStorage.getItem("signUp")) || []

console.log(signUpArr)

function mySignIn(event) {
    event.preventDefault()

    SignInObj = {

        email: document.querySelector("#email").value,
        password: document.querySelector("#pass").value
    }

    if (checkSignIn(SignInObj.email, SignInObj.password) == true) {
        signUpArr.push(SignInObj)
        localStorage.setItem("signIn", JSON.stringify(signUpArr))
        alert("signIn successfully !!")
        window.location.href = "signUp.html" ;
        // console.log(signInArr)
    } else {
       alert("wrong user or password")
    }


    function checkSignIn(email, password) {
        filtered = signUpArr.filter(function (elem) {
            return email == elem.email && password == elem.password;

        })

        if (filtered.length>0) {
            return true;
        } else{
            return false;
        }
    }
}