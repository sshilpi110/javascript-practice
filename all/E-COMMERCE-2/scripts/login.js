
let form = document.querySelector("form");
let collect = JSON.parse(localStorage.getItem("userData")) || [];
form.addEventListener("submit", loginFun)

function loginFun(event) {
    event.preventDefault();

    let obj = {
        email: form.email.value,
        password: form.password.value
    }
    console.log(obj);
    if (checkSignin(obj.email, obj.password)) {
        collect.push(obj);
        localStorage.setItem("signin", JSON.stringify(collect))
        alert("signIn Successfully !!")
        window.location.href = "index.html"
    }
    else {
        alert("wrong username or password")
    }
}

function checkSignin(email, password) {
    let filtered = collect.filter(function (el) {
        return el.email === email && el.password === password;
    })
    if (filtered.length > 0) {
        return true;
    }
    else {
        return false;
    }
}


