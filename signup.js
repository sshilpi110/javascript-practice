

document.querySelector("form").addEventListener("submit", mySignUp);
let signUpArr = JSON.parse(localStorage.getItem("signUp")) || []


function mySignUp(event) {
    event.preventDefault();

    let signUpObj = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#pass").value

    }
    if (checkEmails(signUpObj.email) === true) {
        signUpArr.push(signUpObj)
        //    console.log(signUpArr)
        localStorage.setItem("signUp", JSON.stringify(signUpArr))
        alert("signUp Successfully!!")
        window.location.href="signIn.html" ;
    } else {
        alert("Account already exist")
    }

    function checkEmails(email) {
        let filtered = signUpArr.filter(function (elem) {
            return email === elem.email;
        })

        if (filtered.length > 0) {
            return false
        } else {
            return true;
        }
    }
}
