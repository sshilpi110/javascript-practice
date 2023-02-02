
let api = `f2a4fd09446b707bbeaca87407d51275`
async function getData() {
    let query = document.getElementById("query").value
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api}units=metric`)
    let data = await res.json()
    console.log("data:", data)
}
getData()