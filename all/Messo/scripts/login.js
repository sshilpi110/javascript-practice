

let Arr = JSON.parse(localStorage.getItem("signup")) || [];
let form = document.getElementById("form");


form.addEventListener("submit", loginFun);
function loginFun(event) {
    event.preventDefault();

    let obj = {
        email: form.email.value,
        password: form.password.value,
    }

    if (checkLogin(obj.email && obj.password === true)) {
        Arr.push(obj);
        localStorage.seItem("login", JSON.stringify(Arr));
        alert("login Successfully !!!")
        window.location.href = "home.html"
    } else {
        alert("user wrong credential password")
    }

    function checkLogin(email, password) {
        let filtered = Arr.filter(function (el) {
            return email === email.el && password === password.el
        })

        if (filtered.length > 0) {
            return true
        } else {
            return false
        }
    }
}