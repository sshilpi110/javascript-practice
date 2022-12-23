let collect = JSON.parse(localStorage.getItem("userData")) || []
let form = document.querySelector("form");

form.addEventListener("submit", signupFun);
function signupFun(event) {
    event.preventDefault();

    let data = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value
    }

    if (checkEmails(data.email) === true) {
        collect.push(data);
        localStorage.setItem("userData", JSON.stringify(collect))
        alert("SignUp Successful!!!")
    }
    else {
        alert("Account already exist");
    }
    console.log(data);




    function checkEmails(email) {
        let filter = collect.filter(function (el) {
            return email === el.email;
        })
        if (filter.length > 0) {
            return false;
        } else {
            return true;
        }

    }
    window.location.href = "login.html"
    console.log(collect)
}