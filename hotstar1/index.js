

async function searchMovie() {
    let query = document.getElementById("query").value
    try {
        let res = await fetch(`http://www.omdbapi.com/?apikey=484879df&s=${query}`)
        let data = await res.json()
        console.log("data:", data)
        return data.Search
    } catch (err) {
        console.log(err)
    }
}
searchMovie()

async function main() {
    let data = await searchMovie()
    if (data === undefined)
    return false;
    appendData(data)
}

function appendData(data) {
    document.getElementById("movies").innerText = "";
    data.forEach((el) => {
        let div = document.createElement("div")
        let poster = document.createElement("img")
        poster.src = el.Poster;

        let title = document.createElement("p")
        title.innerText = el.Title;

        let type = document.createElement("p")
        type.innerText = el.Type;

        let year = document.createElement("p")
        year.innerText = el.Year;

        div.append(poster, title, type, year)
        document.getElementById("movies").append(div)
    })
}

let id;
function debounce(fun, delay) {
    fun()
    if (id) {
        clearTimeout(id)
    }
    id = setTimeout(function () {
        fun()
    }, delay)


}
