
document.querySelector("#form").addEventListener("submit", formFun)

let dsaArr = JSON.parse(localStorage.getItem("user")) || []
function formFun(event) {
    event.preventDefault()

    userObj = {
        title: document.querySelector("#title").value,
        link: document.querySelector("#link").value,
        difficulty: document.querySelector("#difficulty").value
    }
    dsaArr.push(userObj)
    localStorage.setItem("user" ,JSON.stringify(dsaArr))
    console.log(dsaArr);
    displayTable(dsaArr)
}


function displayTable(dsaArr) {
    document.querySelector("tbody").innerText = "";
    dsaArr.forEach(function(elem,index) {

        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = elem.title;

        let td2 = document.createElement("td")
        td2.innerText = elem.link;

        let td3 = document.createElement("td")
        td3.innerText = elem.difficulty;


        let td4 = document.createElement("td")

        if (elem.difficulty == "Easy") {
            td4.innerText = "NO"
        }
        else {
            td4.innerText = "yes"
        }


         let btn= document.createElement("button")
         btn.innerText="DELETE"

         btn.addEventListener("click" ,dltFun)

         function dltFun(){
            dsaArr.splice(i,1)
         }

        tr.append(td1, td2, td3, td4 ,btn )

        document.querySelector("tbody").append(tr);
    }) ;

}